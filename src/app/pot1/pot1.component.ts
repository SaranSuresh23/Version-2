import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { PotsDetailsService } from '../services/pots-details.service';

@Component({
  selector: 'app-pot1',
  templateUrl: './pot1.component.html',
  styleUrls: ['./pot1.component.css']
})
export class Pot1Component implements OnInit {

  public user: string | null = this.getUserFromSessionStorage();
  Products:IBonsai[] |undefined
  potProducts : any;
  constructor(private services:UserService,private potDetailsService:PotsDetailsService) { }

  ngOnInit() {
    this.potDetailsService.potProducts().subscribe((data:any)=>{
      this.potProducts=data
      this.potProducts.forEach((a:any) => {
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

