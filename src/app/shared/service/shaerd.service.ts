import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShaerdService {

  private API_URL = environment.api_url;
  private APIREGISTER_URL = environment.apiregister_url;

  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public register(body: any) {
    return this.http.post<any>(this.APIREGISTER_URL + '/user/save', body, this.httpOption);
  }
  public createdorm(body: any) {
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

  public getConByDormId(dorm_id: any) {
    return this.http.get<any>(this.API_URL + '/con-id/' + `${dorm_id}`);
  }

  public getDormByTypeId(body: any) {
    return this.http.get<any>(this.API_URL + '/dorm-type/' + `${body}`);
  }
  //Dorm

  public uploadImage(body: any) {
    return this.http.post<any>(this.API_URL + '/upload/file', body, {responseType: 'text' as 'json'});
  }

  public getDormByuserId(id: any) {
    return this.http.get<any>(this.API_URL + '/dorm-id/' + `${id}`);
  }
  public getRoomBydormId(dorm_id: any) {
    return this.http.get<any>(this.API_URL + '/room-id/' + `${dorm_id}`);
  }
  public getMemBydormId(dorm_id: any) {
    return this.http.get<any>(this.API_URL + '/mem-id/' + `${dorm_id}`);
  }
  public getPayBydormId(dorm_id: any) {
    return this.http.get<any>(this.API_URL + '/pay-id/' + `${dorm_id}`);
  }
  public updatePay(body: any) {
    return this.http.post<any>(this.API_URL + '/pay/update', body, this.httpOption);
  }
  public getMemById(id: any) {
    return this.http.get<any>(this.API_URL + '/member/' + `${id}`);
  }
  public getDormByDormID(dorm_id: any) {
    return this.http.get<any>(this.API_URL + '/dormitory/' + `${dorm_id}`);
  }

  public update(body: object) {
    console.log('LOG API update  URL>>>>:', this.APIREGISTER_URL + '/user/update');

    console.log('LOG API update  body>>>>:', body);
    return this.http.post<any>(this.APIREGISTER_URL + '/user/update', body, this.httpOption);
  }
  public getUser(username: string) {
    return this.http.get<any>(this.APIREGISTER_URL + '/user/' + `${username}`);
  }

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
    return this.http.delete<any>(this.API_URL + '/room/' + `${body}`);//admin
  }
  public updateRoom(body: any) {
    return this.http.post<any>(this.API_URL + '/room/update', body, this.httpOption);
  }
  public getAllroom() {
    return this.http.get<any>(this.API_URL + '/rooms');
  }

  //admin
  public deleteDormByDorm_id(body: any) {
    return this.http.delete<any>(this.API_URL + '/dorm/' + `${body}`);
  }
  public updateUser(body: any) {
    return this.http.post<any>(this.API_URL + '/user/update', body, this.httpOption);
  }


}
