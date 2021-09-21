import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { Pessoas } from 'src/app/interfaces/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent {
  public pessoa!: Pessoas;
  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent;

  constructor(
    private pessoaService: PessoaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.getPessoa(this.activatedRoute.snapshot.params.id);
    }

  getPessoa(id: number) {
    this.pessoaService.getPessoa(id)
      .subscribe((pessoa: Pessoas) => {
        this.pessoa = pessoa;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar pessoa.'); });
  }

  atualizaPessoa(pessoa: Pessoas) {
    this.pessoaService.atualizaPessoa(pessoa)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao atualizar pessoa.'); });
  }

}
