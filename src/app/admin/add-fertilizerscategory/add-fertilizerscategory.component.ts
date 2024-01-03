import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { FertilizersDetailsService } from 'src/app/services/fertilizers-details.service';

@Component({
  selector: 'app-add-fertilizerscategory',
  templateUrl: './add-fertilizerscategory.component.html',
  styleUrls: ['./add-fertilizerscategory.component.css']
})
export class AddFertilizerscategoryComponent {
  addProductMessage:string|undefined
  constructor(private fertilizersDetailsService:FertilizersDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.fertilizersDetailsService.addFertilizer(data).subscribe((result)=>{
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
