import { Component, OnInit } from '@angular/core';
import { IBonsai } from 'src/app/datatype';
import { SeedsDetailsService } from 'src/app/services/seeds-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-seedList',
  templateUrl: './admin-seedList.component.html',
  styleUrls: ['./admin-seedList.component.css']
})
export class AdminSeedListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private seedsDetailsService:SeedsDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.seedsDetailsService.deleteSeed(id).subscribe((result)=>{
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
    this.seedsDetailsService.seedProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }



}
