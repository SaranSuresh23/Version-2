import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { FertilizersDetailsService } from '../services/fertilizers-details.service';


@Component({
  selector: 'app-fertilizer1',
  templateUrl: './fertilizer1.component.html',
  styleUrls: ['./fertilizer1.component.css']
})
export class Fertilizer1Component implements OnInit {

  public user: string | null = this.getUserFromSessionStorage();
  Products:IBonsai[] |undefined
  fertilizerProducts: any;
  constructor(private services:UserService,private fertilzerDetailsService:FertilizersDetailsService) { }

  ngOnInit() {
    this.fertilzerDetailsService.fertilizerProducts().subscribe((data:any)=>{
      this.fertilizerProducts=data
      this.fertilizerProducts.forEach((a:any) => {
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