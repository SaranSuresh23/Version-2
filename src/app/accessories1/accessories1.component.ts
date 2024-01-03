import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { AccessoriesDetailsService } from '../services/accessories-details.service';


@Component({
  selector: 'app-accessories1',
  templateUrl: './accessories1.component.html',
  styleUrls: ['./accessories1.component.css']
})
export class Accessories1Component implements OnInit {

  public user: string | null = this.getUserFromSessionStorage();
  seedProducts:IBonsai[] |undefined
  accessoriesProducts: any;
  constructor(private services:UserService,private accessoriesDetailsService:AccessoriesDetailsService) { }

  ngOnInit() {
    this.accessoriesDetailsService.accessoriesProducts().subscribe((data:any)=>{
      this.accessoriesProducts=data
      this.accessoriesProducts.forEach((a:any) => {
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
