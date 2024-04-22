import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/usuarios';
  loggedIn = false;

  username: string | undefined;

  login(username: string) {
    this.loggedIn = true;
    this.username = username;
    localStorage.setItem('username', username);

  }

  logout() {
    this.loggedIn = false;
    this.username = undefined;
    localStorage.setItem('username', "");

  }
  private user!: User;
  constructor(private http: HttpClient) { }

  public loggin(userData: any): Observable<any> {
    return this.http.get<any>(this.apiUrl, userData);
  }

  registrar(dados: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, dados);
  }

  recuperarSenha(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios`, { email });
  }
}
