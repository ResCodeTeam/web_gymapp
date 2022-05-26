import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { Ginasio } from 'src/app/models/ginasio.model';

const api_url = "http://localhost:2900/"

@Injectable({
  providedIn: 'root'
})
export class GinasioService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) { }

  getAllMyGyms() : Observable<Ginasio> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<Ginasio>(`${api_url}aluno/ginasios`, { headers: headers })
  }
}
