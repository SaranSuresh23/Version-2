import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { ToolsDetailsService } from 'src/app/services/tools-details.service';

@Component({
  selector: 'app-add-toolscategory',
  templateUrl: './add-toolscategory.component.html',
  styleUrls: ['./add-toolscategory.component.css']
})
export class AddToolscategoryComponent {
  addProductMessage:string|undefined
  constructor(private toolsDetailsService:ToolsDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.toolsDetailsService.addTool(data).subscribe((result)=>{
      if(result){
        this.addProductMessage="New Product is added successfully"
      }
    })
    setTimeout(()=>{
      this.addProductMessage=undefined
      this.router.navigate(['admin/home'])
    },2000)
  }
}
