import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';
import { ListaPessoasComponent } from './paginas/lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  {path:'', component: ListaPessoasComponent},
  {path:'pessoa/criar', component:CriarPessoaComponent},
  {path: 'pessoa/editar/:id', component:EditarPessoaComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
