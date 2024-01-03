import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { SeedsDetailsService } from '../services/seeds-details.service';


@Component({
  selector: 'app-seed1',
  templateUrl: './seed1.component.html',
  styleUrls: ['./seed1.component.css']
})
export class Seed1Component implements OnInit {
  public user: string | null = this.getUserFromSessionStorage();
  Products:IBonsai[] |undefined
  seedProducts : any
  constructor(private services:UserService,private seedDetailsService:SeedsDetailsService) { }

  ngOnInit() {
    this.seedDetailsService.seedProducts().subscribe((data:any)=>{
      this.seedProducts=data
      this.seedProducts.forEach((a:any) => {
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
