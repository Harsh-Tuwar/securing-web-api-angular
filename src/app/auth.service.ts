import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  public readToken(): any {
    const token = localStorage.getItem('access_token');
    return this.jwtHelper.decodeToken(token);
  }

  isAuthenticated():boolean{
    const token = localStorage.getItem('access_token');
    
    //we can alos check of the token is expired or not with 
    //this.jwtHelper.isTokenExpired(token)

    if(token){
      console.log('token available');
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  //try to login
  login(user: User): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/login', user);
  }
}
