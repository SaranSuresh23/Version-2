import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class SeedsDetailsService {

  constructor(private http:HttpClient) { }
  seedProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/seeds")
   }
   getBonsai(id: string){
    return this.http.get<IBonsai>(`http://localhost:3000/seeds/${id}`)
  }
  editSeed(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/seeds/${product.id}`,product)
  }
  addSeed(data:IBonsai){
    return this.http.post('http://localhost:3000/seeds',data)
  }
  deleteSeed(id:number){
    return this.http.delete(`http://localhost:3000/seeds/${id}`)
  }
  // seeddetails

  productDetails = [
    {
      id:1,
      productName:"Tomato",
      productDetails:"Organic Vegetable Seeds",
      productPrice:85,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-marglobe-organic-vegetable-seeds-16969383641228_600x600.jpg?v=1634205137"
    },
    {
      id:2,
      productName:"Cauliflower Snowball",
      productDetails:"Desi Vegetable Seeds",
      productPrice:20,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-cauliflower-snowball-16-desi-vegetable-seeds-16968696627340_600x600.jpg?v=1634203465"
    },
    {
      id:3,
      productName:"Spinach",
      productDetails:"Organic Vegetable Seeds",
      productPrice:75,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-spinach-organic-vegetable-seeds-16969343697036_600x600.jpg?v=1634204867"
    },
    {
      id:4,
      productName:"Cabbage",
      productDetails:"Desi Vegetable Seeds",
      productPrice:27,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-cabbage-special-pride-desi-vegetable-seeds-16968672411788_600x600.jpg?v=1634203286"
    },
    {
      id:5,
      productName:"Methi Kasturi",
      productDetails:"Desi Vegetable Seeds",
      productPrice:25,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-methi-kasturi-desi-vegetable-seeds-16969026175116_600x600.jpg?v=1634204330"
    },
    {
      id:6,
      productName:"Tulsi Seeds (Black)",
      productDetails:"Organic Herb Seeds",
      productPrice:75,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-krishna-tulsi-tulsi-black-0-5-kg-seeds-112929_600x600.png?v=1679750449"
    },
    {
      id:7,
      productName:"Peas Seeds",
      productDetails:"Desi Vegetable Seeds",
      productPrice:25,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516"
    },
    {
      id:8,
      productName:"Radish Red Round Seeds",
      productDetails:"Desi Vegetable Seeds",
      productPrice:27,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-radish-red-round-desi-vegetable-seeds-16969238020236_600x600.jpg?v=1634204738"
    },
    {
      id:9,
      productName:"Turnip Purple Top",
      productDetails:"Desi Vegetable Seeds",
      productPrice:29,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-turnip-purple-top-desi-vegetable-seeds-16969408413836_600x600.jpg?v=1634205211"
    },
    {
      id:10,
      productName:"Knol Khol White",
      productDetails:"Desi Vegetable Seeds",
      productPrice:30,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-knol-khol-white-desi-vegetable-seeds-16968987967628_600x600.jpg?v=1634204120"
    },
    {
      id:11,
      productName:"Lettuce Ice Berg Salista",
      productDetails:"Vegetable Seeds",
      productPrice:49,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-lettuce-ice-berg-salista-vegetable-seeds-16969078538380_600x600.jpg?v=1634204220"
    },
    {
      id:12,
      productName:"Cineraria Mixed Color",
      productDetails:"Flower Seeds",
      productPrice:50,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-cineraria-mixed-color-flower-seeds-16968784576652_600x600.jpg?v=1634203646"
    },
    {
      id:13,
      productName:"Onion NP 53",
      productDetails:"Desi Vegetable Seeds",
      productPrice:50,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-onion-np-53-desi-vegetable-seeds-16969142599820_600x600.jpg?v=1634204412"
    },
    {
      id:14,
      productName:"Alfalfa, Lucerne",
      productDetails:"0.5 kg Seeds",
      productPrice:420,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-alfalfa-lucerne-0-5-kg-seeds-16968582824076_600x600.jpg?v=1634212999"
    },
    {
      id:15,
      productName:"Bermuda Lawn Grass",
      productDetails:"250 g seeds",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-bermuda-grass-250-g-seeds-16968629878924_600x600.jpg?v=1634214275"
    },
    {
      id:16,
      productName:"Pack of 75 Native Tree Seeds of India",
      productDetails:"-",
      productPrice:1699,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pack-of-75-native-tree-seeds-of-india-frame-2-600x600-390961_902x902.jpg?v=1679750744"
    },
    {
      id:17,
      productName:"Cassia Marginata, Rose Shower",
      productDetails:"0.5 kg Seeds",
      productPrice:499,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-cassia-marginata-rose-shower-0-5-kg-seeds-16968694956172_600x600.jpg?v=1634215611"
    },
    {
      id:18,
      productName:"Capsicum California Wonder",
      productDetails:"Organic Vegetable Seeds",
      productPrice:75,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-capsicum-california-wonder-organic-vegetable-seeds-16968684863628_600x600.jpg?v=1634203340"
    },
    {
      id:19,
      productName:"Chilly Red",
      productDetails:"Organic Vegetable Seeds",
      productPrice:79,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-chilly-red-organic-vegetable-seeds-16968780972172_600x600.jpg?v=1634203603"
    }

  ]

}
