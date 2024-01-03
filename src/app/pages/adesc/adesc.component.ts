import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AccessoriesDetailsService } from 'src/app/services/accessories-details.service';

@Component({
  selector: 'app-adesc',
  templateUrl: './adesc.component.html',
  styleUrls: ['./adesc.component.css']
})
export class AdescComponent implements OnInit{
  accessoriesData:any;
  constructor(private activatedRoute:ActivatedRoute,private accessoriesDetailsService:AccessoriesDetailsService,private router:Router){}
ngOnInit() {
  let accessoriesId = this.activatedRoute.snapshot.paramMap.get('accessoriesId')
   console.log(accessoriesId)
   accessoriesId && this.accessoriesDetailsService.getAccessories(accessoriesId).subscribe((result)=>{
    this.accessoriesData=result
   console.log(this.accessoriesData)
  })
}

  /*constructor(private param:ActivatedRoute,private service:AccessoriesDetailsService) { }
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
