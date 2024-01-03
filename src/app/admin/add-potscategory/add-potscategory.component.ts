import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { PotsDetailsService } from 'src/app/services/pots-details.service';

@Component({
  selector: 'app-add-potscategory',
  templateUrl: './add-potscategory.component.html',
  styleUrls: ['./add-potscategory.component.css']
})
export class AddPotscategoryComponent {
  addProductMessage:string|undefined
  constructor(private potsDetailsService:PotsDetailsService,private router:Router){

  }
  ngOnInIt(){}
  submit(data:IBonsai){
    this.potsDetailsService.addPot(data).subscribe((result)=>{
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
