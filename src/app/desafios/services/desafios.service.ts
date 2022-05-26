import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

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
    return this.http.get<any>(`${api_url}ginasio/${gymId}/desafios/disponiveis`, { headers: headers })
  }
}
