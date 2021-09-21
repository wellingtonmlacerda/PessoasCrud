import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from '../interfaces/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  getListaPessoas():Observable<Pessoas[]>{
    const url = `${environment.pessoasApiUrl}/pessoas`;
    return this.http.get<Pessoas[]>(url);
  }

  getPessoa(id: number):Observable<Pessoas>{
    const url = `${environment.pessoasApiUrl}/pessoas/${id}`;
    return this.http.get<Pessoas>(url);
  }

  addPessoa(pessoa: Pessoas):Observable<Pessoas>{
    const url = `${environment.pessoasApiUrl}/pessoas`;
    return this.http.post<Pessoas>(url, pessoa);
  }

  atualizaPessoa(pessoa: Pessoas):Observable<Pessoas>{
    const url = `${environment.pessoasApiUrl}/pessoas/${pessoa.ID}`;
    return this.http.put<Pessoas>(url, pessoa);
  }

  deletaPessoa(id: number):Observable<Pessoas>{
    const url = `${environment.pessoasApiUrl}/pessoas/${id}`;
    return this.http.delete<Pessoas>(url);
  }
}
