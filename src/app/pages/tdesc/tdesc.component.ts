import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToolsDetailsService } from 'src/app/services/tools-details.service';

@Component({
  selector: 'app-tdesc',
  templateUrl: './tdesc.component.html',
  styleUrls: ['./tdesc.component.css']
})
export class TdescComponent implements OnInit{
  toolData:any;
  constructor(private activatedRoute:ActivatedRoute,private toolsDetailsService:ToolsDetailsService,private router:Router){}
ngOnInit() {
  let toolId = this.activatedRoute.snapshot.paramMap.get('toolId')
   console.log(toolId)
   toolId && this.toolsDetailsService.getTool(toolId).subscribe((result)=>{
    this.toolData=result
   console.log(this.toolData)
  })
}

 /* constructor(private param:ActivatedRoute,private service:ToolsDetailsService ) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.productDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
    }
  }*/
}
