import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BonsaiDetailsService } from 'src/app/services/bonsai-details.service';

@Component({
  selector: 'app-bdesc',
  templateUrl: './bdesc.component.html',
  styleUrls: ['./bdesc.component.css']
})
export class BdescComponent implements OnInit{
  bonsaiData:any;
  constructor(private activatedRoute:ActivatedRoute,private bonsaiDetailsService:BonsaiDetailsService,private router:Router){}
ngOnInit() {
  let bonsaiId = this.activatedRoute.snapshot.paramMap.get('bonsaiId')
   console.log(bonsaiId)
   bonsaiId && this.bonsaiDetailsService.getBonsai(bonsaiId).subscribe((result)=>{
    this.bonsaiData=result
   console.log(this.bonsaiData)
  })
}


 /* constructor(private param:ActivatedRoute,private service:BonsaiDetailsService) { }
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
