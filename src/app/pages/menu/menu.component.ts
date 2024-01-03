import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { CartService } from 'src/app/services/cart.service';

import { WishlistService } from 'src/app/services/wishlist.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService, private cartService : CartService, private wishlist:WishlistService,private services:UserService, private route:ActivatedRoute,private http:HttpClient) { }
  productData:any;
  searchKey:string ="";

  addWishlist:boolean=false;
  addedToWishlist:boolean=false;
  public user =localStorage.getItem("username");

  ngOnInit(): void {
    this.productData = this.service.productDetails;
    this.productData.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
   /* console.log(this.productData)
  this.cartService.search.subscribe((val:any)=>{
    this.searchKey = val;
  })*/
}
addToCart(item:any){
  var cart={
    uname:this.user,
    id:item.id,
    title:item.productName,
    spec:item.productDetails,
    price:item.productPrice,
    quantity:item.quantity,
    thumbnail:item.productImg
  }
  this.services.addToCart(cart).subscribe((data)=>{});
}
addToWishlist(item:any){
  var cart={
    uname:this.user,
    id:item.id,
    title:item.productName,
    spec:item.productDetails,
    price:item.productPrice,
    quantity:item.quantity,
    thumbnail:item.productImg
  }
  this.services.addToWishlist(cart).subscribe((data)=>{
    this.addWishlist=true;
    alert("Added to your wishlist");
  });
}
removeFromWishlist(products:any){
  this.http.delete("http://localhost:3000/wishlist/"+products.id).subscribe(()=>{
    this.addWishlist=false;
    alert("Removed from your wishlist");
  });
}
}
