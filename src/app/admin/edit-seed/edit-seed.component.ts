import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IBonsai } from 'src/app/datatype';
import { SeedsDetailsService } from 'src/app/services/seeds-details.service';

@Component({
  selector: 'app-edit-seed',
  templateUrl: './edit-seed.component.html',
  styleUrls: ['./edit-seed.component.css']
})
export class EditSeedComponent implements OnInit {

  productData:IBonsai|undefined
  productMessage:string|undefined

  constructor(private route:ActivatedRoute,private seedsDetailsService:SeedsDetailsService,private router:Router) { }

  ngOnInit() {
    let productId=this.route.snapshot.paramMap.get('id')
    console.log(productId)
    productId && this.seedsDetailsService.getBonsai(productId).subscribe((data)=>{
      console.log(data)
      this.productData=data

    })
  }
  submit(data: any){
    if(this.productData){
      data.id = this.productData.id
    }
    this.seedsDetailsService.editSeed(data).subscribe((result)=>{
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
