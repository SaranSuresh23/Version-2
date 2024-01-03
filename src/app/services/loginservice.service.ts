import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  isLoggedIn:boolean=false;
  userName:any="";
  password:any="";
constructor() {
}
  userLoggedIn(u:any,p:any){
    this.userName=u;
    this.password=p;
    this.isLoggedIn=true;
  }
  isUserLoggedIn(){
    return of(this.isLoggedIn);
  }
  userLogout(){
    this.isLoggedIn=false;
  }
}