import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  urlApiUser = "http://localhost:8080/user";
  urlApiAdmin = "http://localhost:8080/admin";
  urlApi = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public signup(FormData: User) {
    return this.http.post(`${this.urlApiUser}/signup`, FormData);
  }
}
