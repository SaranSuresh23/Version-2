import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { ToolsDetailsService } from 'src/app/services/tools-details.service';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.css']
})
export class EditToolComponent implements OnInit {

  productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private toolsDetailsService:ToolsDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.toolsDetailsService.getTool(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.toolsDetailsService.editTool(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.productMessage = "Product has been updated successfully"

      }
    })
    setTimeout(()=>{
      this.productMessage = undefined
      this.router.navigate(['/admin/home']);
    }, 1000)
    console.log(data)
  }


}
