import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { FertilizersDetailsService } from 'src/app/services/fertilizers-details.service';

@Component({
  selector: 'app-edit-fertilizer',
  templateUrl: './edit-fertilizer.component.html',
  styleUrls: ['./edit-fertilizer.component.css']
})
export class EditFertilizerComponent implements OnInit {

  productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private fertlizersDetailsService:FertilizersDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.fertlizersDetailsService.getFertilizer(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.fertlizersDetailsService.editFertilizer(data).subscribe((result)=>{
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
