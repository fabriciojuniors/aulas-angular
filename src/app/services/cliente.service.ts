import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/env.dev';
import { Cliente } from 'src/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http: HttpClient = inject(HttpClient);

  public get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.URL_API}/clientes`);
  }

  public save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.URL_API}/clientes`, cliente);
  }
  
}
