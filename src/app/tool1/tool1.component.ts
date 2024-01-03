import { Component, OnInit } from '@angular/core';
import { IBonsai } from '../datatype';
import { UserService } from '../services/user.service';
import { BonsaiDetailsService } from '../services/bonsai-details.service';
import { ToolsDetailsService } from '../services/tools-details.service';

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit {
  public user: string | null = this.getUserFromSessionStorage();
  Products:IBonsai[] |undefined
  toolProducts : any;
  constructor(private services:UserService,private toolDetailsService:ToolsDetailsService) { }

  ngOnInit() {
    this.toolDetailsService.toolProducts().subscribe((data:any)=>{
      this.toolProducts=data
      this.toolProducts.forEach((a:any) => {
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
