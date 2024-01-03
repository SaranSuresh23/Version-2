import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IOrder } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
public cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
private storageKey = 'cartItems';


constructor() {
const storedItems = sessionStorage.getItem(this.storageKey);
if (storedItems) {
this.cartItemsSubject.next(JSON.parse(storedItems));
} else {
this.cartItemsSubject.next([]); // Initialize with an empty array if no stored items
}

}


getCartItems(): Observable<any[]> {
return this.cartItemsSubject.asObservable();
}

addToCart(product: any) {
const existingItem = this.cartItemsSubject.getValue().find((item) => item.id === product.id);
if (existingItem) {
alert('Item already added to cart');
} else {
const currentItems = [...this.cartItemsSubject.getValue(), product];
this.cartItemsSubject.next(currentItems);
this.updateStorage(currentItems);
}
}

removeCartItem(itemId: number) {
const currentItems = this.cartItemsSubject.getValue();
const updatedItems = currentItems.filter((item) => item.id !== itemId);
this.cartItemsSubject.next(updatedItems);
this.updateStorage(updatedItems);
}

clearCart() {
this.cartItemsSubject.next([]);
this.updateStorage([]);
}

private updateStorage(items: any[]) {
sessionStorage.setItem(this.storageKey, JSON.stringify(items));
}
// updateTotalItem(): void {
//   this.updateStorage = this.currentItems.length;
//   this.getCartItems(this.items); // Update the cart items in the service
// }
}

 /* public cartItemList : any =[]
  public productData = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.productData.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productData.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productData.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.productPrice
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productData.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productData.next(this.cartItemList);
  }
  orderNow(data: IOrder){
    return this.http.post('http://localhost:3000/orders', data)
  }
  orderList(){
    let userStore = sessionStorage.getItem('user')
    let userData = userStore && JSON.parse(userStore)
    return this.http.get<IOrder[]>('http://localhost:3000/orders?userId='+userData.id)
  }
  cancelOrder(orderId: number){
    const url = 'http://localhost:3000/orders/' + orderId;
    const updatedOrder = { status: 'Cancelled' };
    return this.http.patch(url, updatedOrder);
  }
  /*cancelOrder(orderId: number){
    return this.http.delete('http://localhost:3000/orders/'+orderId)
  }
  bookings(){
    return this.http.get<IOrder[]>('http://localhost:3000/orders')
  }*/

