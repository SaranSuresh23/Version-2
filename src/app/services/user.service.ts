import { EventEmitter, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { IsignIn, IsignUp } from '../datatype';
import { Observable } from 'rxjs';
import { CartItem } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn = new BehaviorSubject<boolean>(false)/**/
  invalidUserAuth = new EventEmitter<boolean>(false)

constructor(private http: HttpClient, private router: Router) { }

userSignUp(user: IsignUp){
  this.http.post('http://localhost:3000/users', user, {observe:'response'}).subscribe((result)=>{
      if(result){
        sessionStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['/home'])
      }
    })
}

userSignin(data: IsignIn){
  this.http.get<IsignUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
  {observe: 'response'}).subscribe((result)=>{
    if(result && result.body?.length){
      sessionStorage.setItem('user',JSON.stringify(result.body[0]))
      this.router.navigate(['/home'])
      this.invalidUserAuth.emit(false)
    }
    else{
      this.invalidUserAuth.emit(true)
    }
    })
}

userAuthReload(){
  if(sessionStorage.getItem('user')){
    this.isUserLoggedIn.next(true)/**/
    this.router.navigate(['/home'])
  }
}


  public user: string | null = this.getUserFromSessionStorage();
isLoggedIn:any=""

  addUserInformation(signin:any){
    return this.http.post("http://localhost:3000/user",signin);

  }
  addCurrentData(signin:any){
    return this.http.post("http://localhost:3000/currentUser",signin);
  }
  getproducts(){
    return this.http.get("http://localhost:3000/Products");
  }
  
  getUserFromSessionStorage(): string | null {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData).name;
    }
    return null;
  }
  getcart(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>("http://localhost:3000/mycart?uname="+this.user);
  }
  getwishlist(){
    if (this.user){
      return this.http.get<CartItem[]>("http://localhost:3000/wishlist?uname="+this.user);
    }
    return new Observable<CartItem[]>(observer => observer.next([]));
  }
  addToWishlist(productId:any){
    return this.http.post("http://localhost:3000/wishlist",productId);
  }
  addToCart(product:any){
    return this.http.post("http://localhost:3000/mycart",product);
  }
  getCurrentUser(){
      return this.http.get("http://localhost:3000/currentUser/1");
  }
  addCurrentUser(product:any){
    return this.http.post("http://localhost:3000/",product);
  }
  updateQuantity(quantitynum:number,id:number){
    const updateQuan={quantity:quantitynum}
    this.http.patch("http://localhost:3000/mycart/"+id,updateQuan);
  }
  addToUserPaymentDetails(details:any){
    return this.http.post("http://localhost:3000/userPaymentDetails",details);
  }



}

