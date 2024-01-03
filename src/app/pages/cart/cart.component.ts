import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public user =localStorage.getItem("username");
  mycart:any="";
  totalAmount:number = 0;
  sum:number=0;
  constructor(private service:UserService,private http:HttpClient,) { }


  ngOnInit() {
    this.service.getcart().subscribe(data=>{
      this.mycart=data;
      this.getTotal(this.mycart)
    });
  }

  deleteData(id:any)
  {
    this.http.delete("http://localhost:3000/mycart/"+id).subscribe();
    window.location.reload();
  }

  quantityPlus(item:any){
    if(item.quantity<10)
    {
      item.quantity=item.quantity+1;
      const updateQuan={quantity:item.quantity}
      this.http.patch("http://localhost:3000/mycart/"+item.id+"/",updateQuan).subscribe();
      window.location.reload();
    }
  }
  quantityMinus(item:any){
    if(item.quantity>=2)
    {
      item.quantity=item.quantity-1;
      const updateQuan={quantity:item.quantity}
      this.http.patch("http://localhost:3000/mycart/"+item.id+"/",updateQuan).subscribe();
      window.location.reload();
    }
  }
  getTotal(data:any){
    for(const item of data){
      this.sum=this.sum+(item.price*item.quantity);
    }
    this.totalAmount=this.sum;
  }
}