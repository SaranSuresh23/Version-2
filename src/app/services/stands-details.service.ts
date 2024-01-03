import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class StandsDetailsService {

  constructor(private http:HttpClient) { }
  standProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/stands")
   }
   getStand(id: string){
    return this.http.get<IBonsai>(`http://localhost:3000/stands/${id}`)
  }
  editStand(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/stands/${product.id}`,product)
  }
  addStand(data:IBonsai){
    return this.http.post('http://localhost:3000/stands',data)
  }
  deleteStand(id:number){
    return this.http.delete(`http://localhost:3000/stands/${id}`)
  }
  // accessoriesdetails

  productDetails = [
    {
      id:1,
      productName:"Metal Planter Stands",
      productDetails:"(Round, Set of 4)",
      productPrice:1500,
      productImg:"https://cdn.shopify.com/s/files/1/0558/5557/9327/products/61MgZiIDCnL._SL1500.jpg?v=1636033563"
    },
    {
      id:2,
      productName:"Heavy Duty Metal Planter Stands",
      productDetails:"Multi-Purpose",
      productPrice:7699,
      productImg:"https://i.etsystatic.com/37776567/r/il/bb1a5f/4403595431/il_fullxfull.4403595431_jx6j.jpg"
    },
    {
      id:3,
      productName:"Metal Planter Stand No. NL0137A",
      productDetails:"(Zig Zag, 2.4 X 5 ft/ 0.7 X 1.5 m)",
      productPrice:2840,
      productImg:"https://5.imimg.com/data5/SELLER/Default/2022/4/AN/AN/OH/105672799/handmade-wooden-wrought-iron-zig-zag-planters-combo-1000x1000.jpeg"
    },
    {
      id:4,
      productName:"Nucast Multiple Flower Pot Holder",
      productDetails:"-",
      productPrice:8154,
      productImg:"https://m.media-amazon.com/images/I/51PH535VwpL._SL500_.jpg"
    },
    {
      id:5,
      productName:"Bicycle Plant Stand",
      productDetails:"-",
      productPrice:1599,
      productImg:"https://m.media-amazon.com/images/I/51PQ3JGg2cL._SL500_.jpg"
    },
    {
      id:6,
      productName:"Livzing Bamboo Plants Shelf",
      productDetails:"for Home Indoors",
      productPrice:2075,
      productImg:"https://m.media-amazon.com/images/I/51eDog2YlDL._SL500_.jpg"
    },
    {
      id:7,
      productName:"Beauty Panda Multipurpose Plant Stand Indoors",
      productDetails:"-",
      productPrice:5690,
      productImg:"https://m.media-amazon.com/images/I/51jcvMGnxeL._SL500_.jpg"
    },
    {
      id:8,
      productName:"Dime Store Wooden Plant Stand for Indoors",
      productDetails:"-",
      productPrice:1569,
      productImg:"https://m.media-amazon.com/images/I/5142Q09DZyL._SL500_.jpg"
    },
    {
      id:9,
      productName:"Ecofynd Indoor plant Stand Online India",
      productDetails:"-",
      productPrice:899,
      productImg:"https://m.media-amazon.com/images/I/519uDdmGyRL._SL500_.jpg"
    },
    {
      id:10,
      productName:"Buy Crafter Metal Plant Stand ",
      productDetails:"For Home Indoor",
      productPrice:1559,
      productImg:"https://m.media-amazon.com/images/I/41YBa-ccL9L._SL500_.jpg"
    },
    {
      id:11,
      productName:"Dime Store Plant Stand for Balcony",
      productDetails:"-",
      productPrice:754,
      productImg:"https://m.media-amazon.com/images/I/51unExm9-fL._SL500_.jpg"
    },
    {
      id:12,
      productName:"Zilver Handmade Cane Planter",
      productDetails:"-",
      productPrice:2150,
      productImg:"https://m.media-amazon.com/images/I/41U73NXwDjL._SL500_.jpg"
    },
    {
      id:13,
      productName:"Ronteno Foldable Wooden Plant Shelf",
      productDetails:"-",
      productPrice:3500,
      productImg:"https://m.media-amazon.com/images/I/41ZFIHwifRL._SL500_.jpg"
    }


  ]

}
