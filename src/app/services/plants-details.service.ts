import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})

  export class PlantsDetailsService {

    constructor(private http:HttpClient) { }
    plantProducts(){
      return this.http.get<IBonsai[]>("http://localhost:3000/plants")
     }
     getPlant(id: string){
      return this.http.get<IBonsai>(`http://localhost:3000/plants/${id}`)
    }
    editPlant(product:IBonsai){
      return this.http.put<IBonsai>(`http://localhost:3000/plants/${product.id}`,product)
    }
    addPlant(data:IBonsai){
      return this.http.post('http://localhost:3000/plants',data)
    }
    deletePlant(id:number){
      return this.http.delete(`http://localhost:3000/plants/${id}`)
    }
  // accessoriesdetails

  productDetails = [
    {
      id:1,
      productName:"Damascus Rose",
      productDetails:"Scented Rose (Any Color) - Plant",
      productPrice:269,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-damascus-rose-scented-rose-any-color-plant_305x305.jpg?v=1634217615"
    },
    {
      id:2,
      productName:"Top 4 Die Hard Succulents Pack",
      productDetails:"-",
      productPrice:759,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack-980804_600x600.jpg?v=1679751768"
    },
    {
      id:3,
      productName:"Orange Fruit",
      productDetails:"Santra ( Grafted ) - Plant",
      productPrice:559,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-orange-fruit-santra-grafted-plant-16969145090188_305x305.jpg?v=1634225134"
    },
    {
      id:4,
      productName:"Hibiscus",
      productDetails:"(Pack of 3) - Plant",
      productPrice:889,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-hibiscus-pack-of-3-plant_512x512.jpg?v=1634221709"
    },
    {
      id:5,
      productName:"Marginata",
      productDetails:"(Dracaena marginata) - Plant",
      productPrice:299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-marginata-dracaena-marginata-plant_600x600.jpg?v=1634223794"
    },
    {
      id:6,
      productName:"Aloe vera",
      productDetails:"Succulent Plant",
      productPrice:275,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-aloe-vera-succulent-plant-16968585871500_938x938.jpg?v=1634213151"
    },
    {
      id:7,
      productName:"Gulmohar Tree",
      productDetails:"Delonix regia - Plant",
      productPrice:300,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gulmohar-tree-delonix-regia-plant_305x305.jpg?v=1634220919"
    },
    {
      id:8,
      productName:"Goodluck Plants for House",
      productDetails:"Set of 4",
      productPrice:759,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-set-of-4-goodluck-plants-for-house-16969320235148_600x600.jpg?v=1634228712"
    },
    {
      id:9,
      productName:"Curtain creeper",
      productDetails:"Vernonia creeper, Parda bel - Plant",
      productPrice:229,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-curtain-creeper-vernonia-creeper-parda-bel-plant-16968807973004_600x600.jpg?v=1634218017"
    },
    {
      id:10,
      productName:"Lemon Tree",
      productDetails:"Nimboo - Plant",
      productPrice:559,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-nimboo-lemon-tree-plant-16969045311628_305x305.jpg?v=1634224933"
    },
    {
      id:11,
      productName:"Coleus (Maroon) - Plant",
      productDetails:"-",
      productPrice:149,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-clleus-maroon_305x305.jpg?v=1634216535"
    },
    {
      id:12,
      productName:"Natural Air Purifier Plants ",
      productDetails:"For Summer Cooling",
      productPrice:1720,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-natural-air-purifier-plants-for-summer-cooling-16969042296972_305x305.jpg?v=1634224684"
    },
    {
      id:13,
      productName:"Mango Tree",
      productDetails:"(Alphonso, Grafted) - Plant",
      productPrice:699,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-mango-tree-alphonso-grafted-plant-16969020702860_305x305.jpg?v=1634223731"
    },
    {
      id:14,
      productName:"Common Mint Plant",
      productDetails:"Pudina - Plant",
      productPrice:299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-common-mint-plant-pudina-plant-16968793620620_305x305.jpg?v=1634216630"
    },
    {
      id:15,
      productName:"Mini Succulent Garden Pack",
      productDetails:"-",
      productPrice:1490,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/set-of-12-succulents-626743_305x305.jpg?v=1679750623"
    },
    {
      id:16,
      productName:"Rubber Tree",
      productDetails:"Rubber Plant, Ficus elastica (Small) - Plant",
      productPrice:399,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-rubber-tree-rubber-plant-ficus-elastica-small-plant-16969285304460_305x305.jpg?v=1634227742"
    },
    {
      id:17,
      productName:"Portulaca Garden Pack",
      productDetails:"(4 Plants + 4 Colorful Pots)",
      productPrice:699,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-portulaca-garden-pack-4-plants-4-colorful-pots-1-810615_305x305.jpg?v=1680591166"
    },
    {
      id:18,
      productName:"Drumsticks",
      productDetails:"Moringa Oleifera - Plant",
      productPrice:175,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-drumsticks-moringa-oleifera-plant-16968832549004_305x305.jpg?v=1634218281"
    },
    {
      id:19,
      productName:"Top 5 Fruits Plants to Grow in Pot",
      productDetails:"Guava,Banana,Mosambi,Mango,Lemon",
      productPrice:1279,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-top-5-fruits-plants-to-grow-in-pot-16969389408396_305x305.jpg?v=1634230318"
    },
    {
      id:20,
      productName:"Lantana camara",
      productDetails:"(Any Color) - Plant",
      productPrice:379,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-lantana-camara-any-color-plant-16968992784524_305x305.jpg?v=1634226997"
    },
    {
      id:21,
      productName:"Jamun Tree",
      productDetails:"Syzygium cumini - Plant",
      productPrice:379,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-jamun-plant_305x305.jpg?v=1634222564"
    },
    {
      id:22,
      productName:"Mehandi - Plant",
      productDetails:"-",
      productPrice:239,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-mehndi-mehandi-plant_305x305.jpg?v=1634223016"
    },
    {
      id:23,
      productName:"Pentas",
      productDetails:"(Any Color) - Plant",
      productPrice:279,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-pentas-any-color-plant-16969168683148_305x305.jpg?v=1634225662"
    },
    {
      id:24,
      productName:"Wish Good Luck With Lucky Bamboo",
      productDetails:"In a Glass Vase with Pebbles - 3 Layer ",
      productPrice:779,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-wish-good-luck-with-3-layer-lucky-bamboo-in-a-glass-vase-with-pebbles-16969427746956_305x305.jpg?v=1634231078"
    },
    {
      id:25,
      productName:"Medicinal Plants Packs",
      productDetails:"-",
      productPrice:1079,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-3-medicinal-herbs_305x305.jpg?v=1637234396"
    },
    {
      id:26,
      productName:"Kaju Tree",
      productDetails:"-",
      productPrice:479,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-kaju-tree-plant-16968974663820_305x305.jpg?v=1634222739"
    },
    {
      id:27,
      productName:"Rudraksha Tree",
      productDetails:"-",
      productPrice:630,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-rudraksha-tree-plant_305x305.jpg?v=1634227766"
    },
    {
      id:28,
      productName:" Money plants in hanging baskets",
      productDetails:"Pack of 4",
      productPrice:2000,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-4-money-plants-in-hanging-baskets-16969034170508_305x305.jpg?v=1634208336"
    },
    {
      id:29,
      productName:"Cascabela Thevetia",
      productDetails:"Yellow Oleander, Bitti (Yellow) - Plant",
      productPrice:350,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-cascabela-thevetia-yellow-oleander-bitti-yellow-plant_305x305.jpg?v=1634215540"
    },
    {
      id:30,
      productName:"Gerbera - Plant",
      productDetails:"(Red)",
      productPrice:349,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-gerbera-red-plant-16968877113484_305x305.jpg?v=1634220246"
    }

  ]

}
