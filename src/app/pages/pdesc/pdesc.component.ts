import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PotsDetailsService } from 'src/app/services/pots-details.service';

@Component({
  selector: 'app-pdesc',
  templateUrl: './pdesc.component.html',
  styleUrls: ['./pdesc.component.css']
})
export class PdescComponent implements OnInit{
  potData:any;
  constructor(private activatedRoute:ActivatedRoute,private potsDetailsService:PotsDetailsService,private router:Router){}
ngOnInit() {
  let potId = this.activatedRoute.snapshot.paramMap.get('potId')
   console.log(potId)
   potId && this.potsDetailsService.getPot(potId).subscribe((result)=>{
    this.potData=result
   console.log(this.potData)
  })
}

  /*constructor(private param:ActivatedRoute,private service:PotsDetailsService) { }
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
