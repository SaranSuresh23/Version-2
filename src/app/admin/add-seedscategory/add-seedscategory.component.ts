import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { SeedsDetailsService } from 'src/app/services/seeds-details.service';

@Component({
  selector: 'app-add-seedscategory',
  templateUrl: './add-seedscategory.component.html',
  styleUrls: ['./add-seedscategory.component.css']
})
export class AddSeedscategoryComponent {
  addProductMessage:string|undefined
  constructor(private seedsDetailsService:SeedsDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.seedsDetailsService.addSeed(data).subscribe((result)=>{
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
