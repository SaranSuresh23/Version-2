import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IsignIn, IsignUp } from './datatype';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  isAdminLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data: IsignUp) {
    return this.http.post('http://localhost:3000/admin', data, {observe: 'response'}).subscribe((result)=>{
      console.log(result)
      if(result) {
        sessionStorage.setItem('admin', JSON.stringify(result.body))
        this.router.navigate(['admin/home'])
      }
    })
  }

  reloadAdmin() {
    if(sessionStorage.getItem('admin')) {
      this.isAdminLoggedIn.next(true)
      this.router.navigate(['admin/home'])
    }
  }

  userSignIn(data: IsignIn){
    this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
    {observe: 'response'}).subscribe((result: any)=>{
      console.log(result)
      if(result && result.body && result.body.length === 1) {
        this.isLoginError.emit(false)
        sessionStorage.setItem('admin', JSON.stringify(result.body))
        this.router.navigate(['admin/home'])
      }
      else {
        console.warn("Login Failed")
        this.isLoginError.emit(true)
      }
    })
  }

}
