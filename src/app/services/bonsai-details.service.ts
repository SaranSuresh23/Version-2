import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class BonsaiDetailsService {

  constructor(private http:HttpClient) { }
  bonsaiProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/bonsai")
   }
   getBonsai(id: string){
    return this.http.get<IBonsai>(`http://localhost:3000/bonsai/${id}`)
  }
  editBonsai(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/bonsai/${product.id}`,product)
  }
  addBonsai(data:IBonsai){
    return this.http.post('http://localhost:3000/bonsai',data)
  }
  deleteBonsai(id:number){
    return this.http.delete(`http://localhost:3000/bonsai/${id}`)
  }
  

  // bonsaidetails

  productDetails = [
    {
      id:1,
      productName:"Ficus Bonsai - Plant",
      productDetails:"-",
      productPrice:1250,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plants-ficus-bonsai-plant_938x938.jpg?v=1635575503"
    },
    {
      id:2,
      productName:"Chinese Pepper Bonsai - Plant",
      productDetails:"-",
      productPrice:2300,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-chinese-pepper-bonsai-plant_600x600.jpg?v=1634216045"
    },
    {
      id:3,
      productName:"Fantastic Ficus Bonsai",
      productDetails:"For Fabulous Mother",
      productPrice:1000,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gifts-fantastic-ficus-bonsai-for-fabulous-mother-16968853979276_305x305.jpg?v=1634219341"
    },
    {
      id:4,
      productName:"Ficus Bonsai - Plant",
      productDetails:"Vertical Braided Arrangement",
      productPrice:7730,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-bonsai-vertical-braided-arrangement-plant-16968857092236_600x600.jpg?v=1634219446"
    },
    {
      id:5,
      productName:"Jade Bonsai - Plant",
      productDetails:"-",
      productPrice:500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-jade-bonsai-plant-16968841166988_396x396.jpg?v=1634222537"
    },
    {
      id:6,
      productName:"Ficus Plant",
      productDetails:"Multiroots 190cm - Plant",
      productPrice:219,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-ficus-multiroots-190cm-plant_600x600.jpg?v=1634219540"
    },
    {
      id:7,
      productName:"Ficus Bonsai with Mini Easel",
      productDetails:"For Friendship Day wishes",
      productPrice:1200,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gifts-friendship-day-wishes-with-incredible-ficus-bonsai-and-mini-easel-16968868397196_396x396.jpg?v=1634221065"
    },
    {
      id:8,
      productName:"Buxus Bonsai - Plant",
      productDetails:"-",
      productPrice:100,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-buxus-bonsai-plant-16968671395980_396x396.jpg?v=1634215153"
    },
    {
      id:9,
      productName:"Golden Cypress Bonsai - Plant",
      productDetails:"-",
      productPrice:1599,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-golden-cypress-bonsai-plant_600x600.jpg?v=1634220546"
    },
    {
      id:10,
      productName:"Wish Good Luck with Ficus Bonsai",
      productDetails:"Along with Laughing Budda",
      productPrice:1110,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gifts-wish-good-luck-with-ficus-bonsai-and-laughing-buddha-16969427845260_396x396.jpg?v=1634231081"
    },
    {
      id:11,
      productName:"Ficus 100 gms",
      productDetails:"-",
      productPrice:899,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-ficus-100-gms-plant_396x396.jpg?v=1634219386"
    },
    {
      id:12,
      productName:"Ficus Panda Bonsai",
      productDetails:"-",
      productPrice:599,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-panda-bonsai-plant-16968859222156_396x396.jpg?v=1634219557"
    },
    {
      id:13,
      productName:"Boxwood Bonsai",
      productDetails:"-",
      productPrice:1450,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-boxwood-bonsai-plant_600x600.jpg?v=1634214932"
    },
    {
      id:14,
      productName:"Ficus Microcarpa Bonsai",
      productDetails:"-",
      productPrice:4250,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-microcarpa-bonsai-plant-16968856764556_600x600.jpg?v=1634219514"
    },
    {
      id:15,
      productName:"Bring Good Luck to your Parents",
      productDetails:"with Budda and Ficus Bonsai",
      productPrice:1099,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-bring-good-luck-to-your-parents-with-buddha-and-ficus-bonsai-832517_396x396.jpg?v=1679749383"
    },
    {
      id:16,
      productName:"Silver Cypress Bonsai",
      productDetails:"-",
      productPrice:1099,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-silver-cypress-bonsai-plant_1_600x600.jpg?v=1634228920"
    },
    {
      id:17,
      productName:"Ficus Iceland Bonsai",
      productDetails:"-",
      productPrice:1099,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-ficus-iceland-bonsai-plant_600x600.jpg?v=1634219481"
    },
    {
      id:18,
      productName:"Ficus Bonsai in Ceramic Pot",
      productDetails:"-",
      productPrice:795,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-ficus-bonsai-in-ceramic-pot-16968856273036_305x305.jpg?v=1634219439"
    },
    {
      id:19,
      productName:"Banyan Tree Bonsai Plant",
      productDetails:"-",
      productPrice:1899,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-banyan-tree-plant_396x396.jpg?v=1634214221"
    }

  ]




}
