import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { Desafio, DesafioAgendado } from 'src/app/models/desafio.model';

const api_url = "http://localhost:2900/"

@Injectable({
  providedIn: 'root'
})
export class DesafiosService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) { }


  getAllDesafiosByGymID(gymId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<Desafio>(`${api_url}ginasio/${gymId}/desafios/disponiveis`, { headers: headers })
  }

  getDesafioInfo(desafioId:string):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<DesafioAgendado>(`${api_url}desafios/${desafioId}`, { headers: headers })
  }

  getAllDesafiosAgendados(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<DesafioAgendado>(`${api_url}aluno/agenda/desafios/`, { headers: headers })
  }

  removeDesafioAgendado(agendamentoId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.delete<any>(`${api_url}aluno/agenda/desafios/${agendamentoId}/agendamento/`, { headers: headers })
  }

  postAgendamentoDeDesafio(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.post<any>(`${api_url}aluno/agenda/desafios`, data, { headers: headers })
  }
}
