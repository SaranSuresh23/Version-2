import { Component, OnInit } from '@angular/core';
import { IBonsai } from 'src/app/datatype';
import { StandsDetailsService } from 'src/app/services/stands-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-standList',
  templateUrl: './admin-standList.component.html',
  styleUrls: ['./admin-standList.component.css']
})
export class AdminStandListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private standsDetailsService:StandsDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.standsDetailsService.deleteStand(id).subscribe((result)=>{
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
    this.standsDetailsService.standProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }

}
