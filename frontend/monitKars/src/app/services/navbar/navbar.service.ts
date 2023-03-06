import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  tokenrespone: any;

  getRole(token: any){
    let _token=token.split('.')[1];
    this.tokenrespone=JSON.parse(_token);
    console.log(this.tokenrespone);
  }

  public async getToken(){
    return sessionStorage.getItem('token');
  }
}
