import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaPessoasComponent } from './paginas/lista-pessoas/lista-pessoas.component';
import { FormPessoaComponent } from './compartilhado/form-pessoa/form-pessoa.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaPessoasComponent,
    FormPessoaComponent,
    CriarPessoaComponent,
    EditarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
