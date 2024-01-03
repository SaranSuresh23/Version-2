import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { PlantsDetailsService } from 'src/app/services/plants-details.service';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css']
})
export class EditPlantComponent implements OnInit {
  productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private plantsDetailsService:PlantsDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.plantsDetailsService.getPlant(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.plantsDetailsService.editPlant(data).subscribe((result)=>{
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
