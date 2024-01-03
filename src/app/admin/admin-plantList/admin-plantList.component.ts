import { Component, OnInit } from '@angular/core';
import { IBonsai } from 'src/app/datatype';
import { PlantsDetailsService } from 'src/app/services/plants-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-plantList',
  templateUrl: './admin-plantList.component.html',
  styleUrls: ['./admin-plantList.component.css']
})
export class AdminPlantListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private plantsDetailsService:PlantsDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.plantsDetailsService.deletePlant(id).subscribe((result)=>{
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
    this.plantsDetailsService.plantProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }


}
