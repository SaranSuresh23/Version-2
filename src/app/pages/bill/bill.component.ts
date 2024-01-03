import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  productData:any;
  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}