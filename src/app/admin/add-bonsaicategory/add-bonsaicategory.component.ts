import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { BonsaiDetailsService } from 'src/app/services/bonsai-details.service';

@Component({
  selector: 'app-add-bonsaicategory',
  templateUrl: './add-bonsaicategory.component.html',
  styleUrls: ['./add-bonsaicategory.component.css']
})
export class AddBonsaicategoryComponent {
  addProductMessage:string|undefined
  constructor(private bonsaiDetailsService:BonsaiDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.bonsaiDetailsService.addBonsai(data).subscribe((result)=>{
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
