import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';

@Component({
  selector: 'app-bonsai1',
  templateUrl: './bonsai1.component.html',
  styleUrls: ['./bonsai1.component.css']
})
export class Bonsai1Component implements OnInit {
  public user: string | null = this.getUserFromSessionStorage();
  Products:IBonsai[] |undefined
  bonsaiProducts : any;
  constructor(private services:UserService,private bonsaiDetailsService:BonsaiDetailsService) { }

  ngOnInit() {
    this.bonsaiDetailsService.bonsaiProducts().subscribe((data:any)=>{
      this.bonsaiProducts=data
      this.bonsaiProducts.forEach((a:any) => {
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

