import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FertilizersDetailsService } from 'src/app/services/fertilizers-details.service';

@Component({
  selector: 'app-fdesc',
  templateUrl: './fdesc.component.html',
  styleUrls: ['./fdesc.component.css']
})
export class FdescComponent  implements OnInit{
  fertilizerData:any;
  constructor(private activatedRoute:ActivatedRoute,private fertilizersDetailsService:FertilizersDetailsService,private router:Router){}
ngOnInit() {
  let  fertilizerId = this.activatedRoute.snapshot.paramMap.get(' fertilizerId')
   console.log( fertilizerId)
   fertilizerId && this. fertilizersDetailsService.getFertilizer( fertilizerId).subscribe((result)=>{
    this. fertilizerData=result
   console.log(this. fertilizerData)
  })
}

  /*constructor(private param:ActivatedRoute,private service:FertilizersDetailsService) { }
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
