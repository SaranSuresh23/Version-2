import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { StandsDetailsService } from 'src/app/services/stands-details.service';

@Component({
  selector: 'app-add-standscategory',
  templateUrl: './add-standscategory.component.html',
  styleUrls: ['./add-standscategory.component.css']
})
export class AddStandscategoryComponent {
  addProductMessage:string|undefined
  constructor(private standsDetailsService:StandsDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.standsDetailsService.addStand(data).subscribe((result)=>{
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
