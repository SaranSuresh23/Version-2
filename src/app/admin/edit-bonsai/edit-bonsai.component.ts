import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { BonsaiDetailsService } from 'src/app/services/bonsai-details.service';


@Component({
  selector: 'app-edit-bonsai',
  templateUrl: './edit-bonsai.component.html',
  styleUrls: ['./edit-bonsai.component.css']
})
export class EditBonsaiComponent implements OnInit {

productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private bonsaiDetailsService:BonsaiDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.bonsaiDetailsService.getBonsai(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.bonsaiDetailsService.editBonsai(data).subscribe((result)=>{
      console.log(result)
      if(result){
        this.productMessage = "Product has been updated successfully"

      }
    })
    setTimeout(()=>{
      this.productMessage = undefined
      this.router.navigate(['/admin/home']);
    }, 2000)
    console.log(data)
  }
 
}

