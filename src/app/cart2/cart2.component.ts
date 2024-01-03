import { Component, OnInit } from '@angular/core';
import { CartItem } from '../datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CartService } from '../services/cart.service';
import { CartOrderService } from '../cart-order.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

  products: any[] = [];
  public total: number = 0;
  public totalItem: number = 0;

  constructor(
    private cartService: CartService,
    private cartorderservice:CartOrderService,

    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.products = items;
      this.calculateTotal();
      this.updateTotalItem();
    });
  }

  addToCart(item: any) {
    this.cartService. addToCart(item);
    this.calculateTotal();
    this.updateTotalItem();
  }

  calculateTotal(): void {
    let total = 0;
    this.products.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.total = total;
  }

  updateTotalItem(): void {
    this.totalItem = this.products.length;
  }

  plus(item: any) {
    if (item.quantity !== 5) {
      item.quantity += 1;
    }
    this.calculateTotal();
  }

  minus(item: any) {
    if (item.quantity !== 1) {
      item.quantity -= 1;
    }
    this.calculateTotal();
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item.id);
    this.calculateTotal();
  }

  emptycart() {
    this.cartService.clearCart();
    this.calculateTotal();
  }

  placeOrder() {
    // Assuming you have an 'orderItems' array in your OrderService to store the ordered items
    this.cartorderservice.placeOrder(this.products);
    this.router.navigate(['/cartorder']);
  }
}



