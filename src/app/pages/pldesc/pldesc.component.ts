import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlantsDetailsService } from 'src/app/services/plants-details.service';

@Component({
  selector: 'app-pldesc',
  templateUrl: './pldesc.component.html',
  styleUrls: ['./pldesc.component.css']
})
export class PldescComponent implements OnInit{
  plantData:any;
  constructor(private activatedRoute:ActivatedRoute,private plantsDetailsService:PlantsDetailsService,private router:Router){}
ngOnInit() {
  let plantId = this.activatedRoute.snapshot.paramMap.get('plantId')
   console.log(plantId)
   plantId && this.plantsDetailsService.getPlant(plantId).subscribe((result)=>{
    this.plantData=result
   console.log(this.plantData)
  })
}

  /*constructor(private param:ActivatedRoute,private service:PlantsDetailsService) { }
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
