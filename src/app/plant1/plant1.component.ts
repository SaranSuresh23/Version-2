import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { PlantsDetailsService } from '../services/plants-details.service';

@Component({
  selector: 'app-plant1',
  templateUrl: './plant1.component.html',
  styleUrls: ['./plant1.component.css']
})
export class Plant1Component implements OnInit {

  public user: string | null = this.getUserFromSessionStorage();
  seedProducts:IBonsai[] |undefined
  plantProducts: any;
  constructor(private services:UserService,private plantDetailsService:PlantsDetailsService) { }

  ngOnInit() {
    this.plantDetailsService.plantProducts().subscribe((data:any)=>{
      this.plantProducts=data
      this.plantProducts.forEach((a:any) => {
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

