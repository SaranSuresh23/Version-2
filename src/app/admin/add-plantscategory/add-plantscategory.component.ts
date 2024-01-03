import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { PlantsDetailsService } from 'src/app/services/plants-details.service';

@Component({
  selector: 'app-add-plantscategory',
  templateUrl: './add-plantscategory.component.html',
  styleUrls: ['./add-plantscategory.component.css']
})
export class AddPlantscategoryComponent {
  addProductMessage:string|undefined
  constructor(private plantsDetailsService:PlantsDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.plantsDetailsService.addPlant(data).subscribe((result)=>{
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
