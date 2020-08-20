
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from '../shared/service/home.service';

@Injectable()
export class AuthenInterceptor implements HttpInterceptor {

  constructor(private homeService: HomeService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const access_token = localStorage.getItem("access_token");
    const isLogin = this.homeService.isLogin();
    
    //chek is Login for set Access Token to Authorization in HTTP Header
    if (isLogin) {
      request = request.clone({
        setHeaders: {
          Authorization: 'bearer ' + access_token
        }
      });
    }

    return next.handle(request);
  }
}
