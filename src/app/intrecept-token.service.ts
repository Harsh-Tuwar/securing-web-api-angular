import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})

export class IntreceptTokenService implements HttpInterceptor{

  constructor(private a: AuthService) { }

  //methods
  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    req = req.clone({
      setHeaders: {
        Authorization: `JWT ${this.a.getToken()}`
      }
    });
    
    //pass the req to next handler
    return next.handle(req);
  }
}
