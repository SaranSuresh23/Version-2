import { Component, OnInit } from '@angular/core';
import { IBonsai } from 'src/app/datatype';
import { ToolsDetailsService } from 'src/app/services/tools-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-toolList',
  templateUrl: './admin-toolList.component.html',
  styleUrls: ['./admin-toolList.component.css']
})
export class AdminToolListComponent implements OnInit {

  productList:IBonsai[]|undefined
  productMessage:string|undefined
  constructor(private toolsDetailsService:ToolsDetailsService,private route:Router){}
  ngOnInit(){
    this.list()
  }
  deleteProduct(id:number){
    const confirmation=confirm("This Product will be deleted ")
    this.toolsDetailsService.deleteTool(id).subscribe((result)=>{
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
    this.toolsDetailsService.toolProducts().subscribe((result)=>{
      if (result){
        this.productList=result
      }
    })
  }

}
