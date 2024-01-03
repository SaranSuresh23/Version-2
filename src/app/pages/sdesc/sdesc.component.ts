import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SeedsDetailsService } from 'src/app/services/seeds-details.service';

@Component({
  selector: 'app-sdesc',
  templateUrl: './sdesc.component.html',
  styleUrls: ['./sdesc.component.css']
})
export class SdescComponent implements OnInit{
  seedData:any;
  constructor(private activatedRoute:ActivatedRoute,private seedsDetailsService:SeedsDetailsService,private router:Router){}
ngOnInit() {
  let seedId = this.activatedRoute.snapshot.paramMap.get('seedId')
   console.log(seedId)
   seedId && this.seedsDetailsService.getBonsai(seedId).subscribe((result)=>{
    this.seedData=result
   console.log(this.seedData)
  })
}

  /*constructor(private param:ActivatedRoute,private service:SeedsDetailsService) { }
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
