import { Component, OnInit } from '@angular/core';
import { IBonsai } from 'src/app/datatype';
import { AccessoriesDetailsService } from 'src/app/services/accessories-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-accessoriesList',
  templateUrl: './admin-accessoriesList.component.html',
  styleUrls: ['./admin-accessoriesList.component.css']
})
export class AdminAccessoriesListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private accessoriesDetailsService:AccessoriesDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.accessoriesDetailsService.deleteAccessories(id).subscribe((result)=>{
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
    this.accessoriesDetailsService.accessoriesProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }


}
