import { Component, OnInit } from '@angular/core';
import { IBonsai } from 'src/app/datatype';
import { FertilizersDetailsService } from 'src/app/services/fertilizers-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-fertilizerList',
  templateUrl: './admin-fertilizerList.component.html',
  styleUrls: ['./admin-fertilizerList.component.css']
})
export class AdminFertilizerListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private fertilizersDetailsService:FertilizersDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.fertilizersDetailsService.deleteFertilizer(id).subscribe((result)=>{
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
    this.fertilizersDetailsService.fertilizerProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }
}


