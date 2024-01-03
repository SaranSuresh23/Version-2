import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { AccessoriesDetailsService } from 'src/app/services/accessories-details.service';

@Component({
  selector: 'app-add-accessoriescategory',
  templateUrl: './add-accessoriescategory.component.html',
  styleUrls: ['./add-accessoriescategory.component.css']
})
export class AddAccessoriescategoryComponent {
  addProductMessage:string|undefined
  constructor(private accessoriesDetailsService:AccessoriesDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.accessoriesDetailsService.addAccessories(data).subscribe((result)=>{
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
