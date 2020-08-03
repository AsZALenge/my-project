import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShaerdService {

  private API_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public registeruser(body: any) {
    return this.http.post<any>(this.API_URL + '/user/save', body, this.httpOption);
  }
  public registerdorm(body: any) {
    return this.http.post<any>(this.API_URL + '/dorm/save', body, this.httpOption);
  }
  public getAllRoom() {
    return this.http.get<any>(this.API_URL + '/rooms');
  }
  public getRoomBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/room/' + `${body}`);
  }
  public getAllDorm() {
    return this.http.get<any>(this.API_URL + '/dorms');
  }
  public getDormBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/dorm/' + `${body}`);
  }
  public getAllMem() {
    return this.http.get<any>(this.API_URL + '/mems');
  }
  public getMemBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/mem/' + `${body}`);
  }
  public getAllProfile() {
    return this.http.get<any>(this.API_URL + '/users');
  }
  public getProBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/user/' + `${body}`);
  }
  public getAllPayment() {
    return this.http.get<any>(this.API_URL + '/dorms');
  }
  public getPaymentBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/dorm/' + `${body}`);
  }
  public savePayment(body: any) {
    return this.http.post<any>(this.API_URL + '/pay/save', body, this.httpOption);
  }
//Dorm
  public addroom(body: any) {
    return this.http.post<any>(this.API_URL + '/room/save', body, this.httpOption);
  }
  public getCheckPayment() {
    return this.http.get<any>(this.API_URL + '/pays');
  }
  public getCheckPaymentBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/pay/' + `${body}`);
  }
  public getDormProfile() {
    return this.http.get<any>(this.API_URL + '/dorms');
  }
  public getDormProBy_id(body: any) {
    return this.http.get<any>(this.API_URL + '/dorm/' + `${body}`);
  }
  public updateDorm(body: any) {
    return this.http.post<any>(this.API_URL + '/dorm/update', body, this.httpOption);
  }
  public getRoomById(body: any) {
    return this.http.get<any>(this.API_URL + '/room/' + `${body}`);
  }
  public getCheckPay() {
    return this.http.get<any>(this.API_URL + '/users');
  }
  public getPay() {
    return this.http.get<any>(this.API_URL + '/pays');
  }
  public deleteRoomByRoom_id(body: any) {
    return this.http.delete<any>(this.API_URL + '/room/' + `${body}`);
  }
  public updateRoom(body: any) {
    return this.http.post<any>(this.API_URL + '/room/update', body, this.httpOption);
  }
  public getAllroom() {
    return this.http.get<any>(this.API_URL + '/rooms');
  }
}
