import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { StandsDetailsService } from '../services/stands-details.service';


@Component({
  selector: 'app-stand1',
  templateUrl: './stand1.component.html',
  styleUrls: ['./stand1.component.css']
})
export class Stand1Component implements OnInit {
  public user: string | null = this.getUserFromSessionStorage();
  Products:IBonsai[] |undefined
  standProducts : any;
  constructor(private services:UserService,private standDetailsService:StandsDetailsService) { }

  ngOnInit() {
    this.standDetailsService.standProducts().subscribe((data:any)=>{
      this.standProducts=data
      this.standProducts.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  getUserFromSessionStorage(): string | null {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      return JSON.parse(userData).name;
    }
    return null;
  }
  addToCart(item: any) {
    var cart = {
      uname: this.user,
      id: item.id,
      title: item.productName,
      spec: item.productDetails,
      price: item.productPrice,
      quantity: item.quantity,
      thumbnail: item.productImg
    };
    this.services.addToCart(cart).subscribe((data) => { });
  }
  
}
