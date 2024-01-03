import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { PotsDetailsService } from 'src/app/services/pots-details.service';


@Component({
  selector: 'app-edit-pot',
  templateUrl: './edit-pot.component.html',
  styleUrls: ['./edit-pot.component.css']
})
export class EditPotComponent implements OnInit {

  productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private potsDetailsService:PotsDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.potsDetailsService.getPot(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.potsDetailsService.editPot(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.productMessage = "Product has been updated successfully"

      }
    })
    setTimeout(()=>{
      this.productMessage = undefined
      this.router.navigate(['/admin/home']);
    }, 1000)
    console.log(data)
  }

}
