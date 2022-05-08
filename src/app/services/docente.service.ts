import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8090/rest/docente';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  constructor(private http: HttpClient) {}

  listaDocente(
    nombre: string = '',
    dni: string = '',
    idUbigeo: number = -1
  ): Observable<any> {
    let params = new HttpParams()
      .set('nombre', nombre)
      .set('dni', dni)
      .set('idUbigeo', idUbigeo.toString());

    return this.http.get<any>(baseUrl + '/listaPorParametros', { params });
  }
}
