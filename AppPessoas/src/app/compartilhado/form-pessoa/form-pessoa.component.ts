import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Pessoas } from 'src/app/interfaces/pessoa';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})
export class FormPessoaComponent {
  @Input() pessoa: Pessoas = <Pessoas>{};
  @Output() outputPessoa: EventEmitter<Pessoas> = new EventEmitter();
  @ViewChild(ErrorMsgComponent) errorMsgComponent!: ErrorMsgComponent;

  onSubmit(){
    this.outputPessoa.emit(this.pessoa);
  }

  ValidaCpf(cpfNumero: string) {
    const cpf = cpfNumero;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if(cpf.length > 11){
      this.pessoa.CPF = "";
      alert("O CPF digitado é invalido");
      return valido = false;
    }
    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) 
      return true;
    else{
      this.pessoa.CPF = "";
      alert("O CPF digitado é invalido");
    }

    return { cpfInvalido: true };
  }
}
