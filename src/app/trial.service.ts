import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor() { }

  private token:any ;


  setToken(tok: any){
   this.token = tok;
  }

  getToken(){
   return this.token;
  }
}
  
