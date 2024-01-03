import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../datatype';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit, OnDestroy {

  public user: string | null = this.getUserFromSessionStorage();
  mycart: CartItem[] = [];
  totalAmount: number = 0;
  private destroy$ = new Subject<void>();

  constructor(private service: UserService, private http: HttpClient,private router:Router) {}

  ngOnInit() {
    // Load cart items when the component is initialized
    this.loadCartItems();

    // Subscribe to user login/logout changes using the destroy$ subject
    this.service.isUserLoggedIn.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.user = this.getUserFromSessionStorage();
      this.loadCartItems();
    });
  }

  ngOnDestroy() {
    // Unsubscribe from observables to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }

  getUserFromSessionStorage(): string | null {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData).name;
    }
    return null;
  }

  loadCartItems() {
    this.service.getcart().subscribe((data: CartItem[]) => {
      this.mycart = data;
      console.log(this.mycart);
      this.calculateTotalAmount();
    });
  }

  deleteData(id: number) {
    this.http.delete(`http://localhost:3000/mycart/${id}`).subscribe(() => {
      this.loadCartItems(); // Refresh cart items after deleting
    });
  }

  quantityPlus(item: CartItem) {
    if (item.quantity < 10) {
      item.quantity = item.quantity + 1;
      this.updateCartItemQuantity(item);
    }
  }

  quantityMinus(item: CartItem) {
    if (item.quantity >= 2) {
      item.quantity = item.quantity - 1;
      this.updateCartItemQuantity(item);
    }
  }

  updateCartItemQuantity(item: CartItem) {
    const updateQuantity = { quantity: item.quantity };
    this.http.patch(`http://localhost:3000/mycart/${item.id}`, updateQuantity).subscribe(() => {
      this.calculateTotalAmount(); // Refresh total amount after updating quantity
    });
  }

  calculateTotalAmount() {
    this.totalAmount = this.mycart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  proceedToCheckout() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        totalAmount: this.totalAmount // Pass the total amount as a query parameter
      }
    };
  
    this.router.navigate(['/payment'], navigationExtras); // Navigate to the payment page with query parameter
  }
}







