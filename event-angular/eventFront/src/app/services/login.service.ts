import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi = "http://localhost:8080/user/login";

  constructor(private http: HttpClient) {}

  public login(loginData: { username: string; password: string }): Observable<any> {
    return this.http.post(this.urlApi, loginData);
  }
}
