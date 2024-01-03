import { Component, OnInit } from '@angular/core';
import { PotsDetailsService } from 'src/app/services/pots-details.service';
import { IBonsai } from 'src/app/datatype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-potList',
  templateUrl: './admin-potList.component.html',
  styleUrls: ['./admin-potList.component.css']
})
export class AdminPotListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private potsDetailsService:PotsDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.potsDetailsService.deletePot(id).subscribe((result)=>{
      if(result&&confirmation){
        this.productMessage="Product is deleted"
        this.list()
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined
    },2000)
  }
  list(){
    this.potsDetailsService.potProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }

}
