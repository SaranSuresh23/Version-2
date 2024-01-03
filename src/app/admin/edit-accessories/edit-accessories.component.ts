import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { AccessoriesDetailsService } from 'src/app/services/accessories-details.service';



@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.css']
})
export class EditAccessoriesComponent implements OnInit {

  productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private accessoriesDetailsService:AccessoriesDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.accessoriesDetailsService.getAccessories(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.accessoriesDetailsService.editAccessories(data).subscribe((result)=>{
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
