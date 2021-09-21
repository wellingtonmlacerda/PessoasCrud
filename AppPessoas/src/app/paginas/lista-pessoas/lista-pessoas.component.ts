import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoas } from 'src/app/interfaces/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  public pessoas!: Pessoas[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent = new ErrorMsgComponent;
  
  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getListaPessoas();
  }

  getListaPessoas(){
    this.pessoaService.getListaPessoas()
      .subscribe((pessoas: Pessoas[])=> {
        this.pessoas = pessoas;
      }, () => {this.errorMsgComponent.setError('Falha ao buscar as pessoas');});
  }

  deletaPessoa(id: number){
    this.pessoaService.deletaPessoa(id)
      .subscribe(()=> {
        this.getListaPessoas();
      }, () => {this.errorMsgComponent.setError('Falha ao deletar a pessoa');});
  }
  existemPessoas():boolean|undefined {
    return this.pessoas && this.pessoas.length > 0;
  }
}
