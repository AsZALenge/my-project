import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from 'rxjs/internal/operators/delay';

const AUTH_MANAGER_URL = environment.auth_manager_url;
const ACCESS_TOKEN_URL = environment.authen.access_token_url;
const client_id = environment.authen.client_id;
const client_secret = environment.authen.client_secret;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // tslint:disable-next-line: variable-name
  private _$userType: BehaviorSubject<any> = new BehaviorSubject<any>({});

  //login
  constructor(private http: HttpClient, private _router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    }),
  };

  public authentication(data: any) {
    let params: HttpParams = new HttpParams();
    params = params.set('username', data.username);
    params = params.set('password', data.password);
    params = params.set('grant_type', 'password');
    return this.http
      .post<any>(ACCESS_TOKEN_URL, params, this.httpOptions)
      .pipe(delay(3000))
      .subscribe(
        (res) => this.initToken(res, data.username),
        (error) => this.handleError(error)
      );
  }

  public getUserInfo(username: string): Observable<any> {
    return this.http.get(AUTH_MANAGER_URL + '/user/' + username);
  }

  initToken(token: any, username: string) {
    console.log(token);

    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);
    localStorage.setItem('expires_in', token.expires_in);
    localStorage.setItem('username', username);
    localStorage.setItem('user', username);

    // get user in fotmation
    this.getUserInfo(username).subscribe(
      (res) => {
        console.log(res)
        // get user Type
        const userType = this.getUserType(res.role)

        // set userType to localStorage
        localStorage.setItem('userType', JSON.stringify(userType));

        localStorage.setItem('dorm', JSON.stringify(res.id));

        // set router
        this.$userType = of(userType)
        this._router.navigate([`${userType}`]);
      },
      (error) => this.handleError(error)
    );

    //this._router.navigate(['/user']);
  }

  getUserType(role: any): any {
    console.log('ROLE :::: ' + role)
    if (role === 1) {
      return 'admin'
    } else if (role === 2) {
      return 'user'
    } else if (role === 3) {
      return 'dorm'
    } else {
      return 'home'
    }
  }

  isLogin() {
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }



  public get $userType(): Observable<any> {
    return this._$userType.asObservable();
  }

  public set $userType(value: Observable<any>) {
    value.subscribe(data => {
      this._$userType.next(data);
    });
  }

}

