import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { BonsaiDetailsService } from 'src/app/services/bonsai-details.service';



@Component({
  selector: 'app-admin-bosaiList',
  templateUrl: './admin-bosaiList.component.html',
  styleUrls: ['./admin-bosaiList.component.css']
})
export class AdminBosaiListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private bonsaiDetailsService:BonsaiDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.bonsaiDetailsService.deleteBonsai(id).subscribe((result)=>{
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
    this.bonsaiDetailsService.bonsaiProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }

}
