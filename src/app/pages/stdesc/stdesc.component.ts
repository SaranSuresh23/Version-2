import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { StandsDetailsService } from 'src/app/services/stands-details.service';


@Component({
  selector: 'app-stdesc',
  templateUrl: './stdesc.component.html',
  styleUrls: ['./stdesc.component.css']
})
export class StdescComponent implements OnInit{

  standData:any;
  constructor(private activatedRoute:ActivatedRoute,private standsDetailsService:StandsDetailsService,private router:Router){}
ngOnInit() {
  let standId = this.activatedRoute.snapshot.paramMap.get('standId')
   console.log(standId)
   standId && this.standsDetailsService.getStand(standId).subscribe((result)=>{
    this.standData=result
   console.log(this.standData)
  })
}
  /*constructor(private param:ActivatedRoute,private service:StandsDetailsService) { }
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
