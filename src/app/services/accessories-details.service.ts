import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesDetailsService {

  constructor(private http:HttpClient) { }
  accessoriesProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/accessories")
   }
   getAccessories(id:string){
    return this.http.get<IBonsai>(`http://localhost:3000/accessories/${id}`)
  }
  editAccessories(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/accessories/${product.id}`,product)
  }
  addAccessories(data:IBonsai){
    return this.http.post('http://localhost:3000/accessories',data)
  }
  deleteAccessories(id:number){
    return this.http.delete(`http://localhost:3000/accessories/${id}`)
  }

  // accessoriesdetails

  productDetails = [
    {
      id:1,
      productName:"Bridge plastic miniature ",
      productDetails:"1 Piece - garden toy",
      productPrice:99,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-garden-toys-bridge-plastic-miniature-garden-toy-1-piece-16968660385932_305x305.jpg?v=1634214990"
    },
    {
      id:2,
      productName:"Moss Stick",
      productDetails:"(2 Feet) (Set of 2)",
      productPrice:259,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-accessories-moss-stick-2-feet-16969035972748_400x400.jpg?v=1634224467"
    },
    {
      id:3,
      productName:"Butterflies plastic miniature",
      productDetails:"5 Pieces - garden toys",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-garden-toys-butterflies-plastic-miniature-garden-toys-5-pieces-16968669069452_305x305.jpg?v=1634215136"
    },
    {
      id:4,
      productName:"Boat with oars plastic miniature",
      productDetails:"1 Set - garden toys",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-garden-toys-boat-with-oars-plastic-miniature-garden-toys-1-set-16968646688908_600x600.jpg?v=1634214736"
    },
    {
      id:5,
      productName:"Microgreens Coir Grow Mat",
      productDetails:"(10 x 20 inch (25.4 x 50.8 cm)) (Set of 20)",
      productPrice:1299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-microgreens-coir-grow-mat-10-x-20-inch-25-4-x-50-8-cm-set-of-20-image_600x600.jpg?v=1634223973"
    },
    {
      id:6,
      productName:"Coir Mulch Mat",
      productDetails:"10Inch (25 cm) (set of 6)",
      productPrice:300,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-accessories-10inch-25-cm-coir-mulch-mat-16968374026380_305x305.jpg?v=1634206465"
    },
    {
      id:7,
      productName:"Mushroom houses plastic miniature",
      productDetails:"4 Pieces -  garden toys",
      productPrice:100,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-garden-toys-mushroom-houses-plastic-miniature-garden-toys-4-pieces-16969039052940_600x600.jpg?v=1634224577"
    },
    {
      id:8,
      productName:"Deer plastic miniature garden toys",
      productDetails:"1 pair",
      productPrice:259,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-garden-toys-deer-plastic-miniature-garden-toys-1-pair-16968818327692_600x600.jpg?v=1634217760"
    },
    {
      id:9,
      productName:"2ft Coir Pole",
      productDetails:"(set of 2)",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-accessories-2ft-coir-pole-254594_600x600.jpg?v=1679748300"
    },
    {
      id:10,
      productName:"Cute monks plastic miniature",
      productDetails:"(Big, Hay Hat, Matt Finish) - 4 pieces - garden toys",
      productPrice:559,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-miniature-garden-toys-cute-monks-plastic-miniature-garden-toys-big-hay-hat-matt-finish-4-pieces-16968808726668_396x396.jpg?v=1634218032"
    },
    {
      id:11,
      productName:"Anodised Aluminium Wire",
      productDetails:"(1 mm, 33 ft /10 m) for Bonsai Training",
      productPrice:149,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-anodised-aluminium-wire-2-mm-33-ft-10-m-for-bonsai-training_305x305.jpg?v=1634213359"
    },
    {
      id:12,
      productName:"Round Metal Birdhouse",
      productDetails:"(Red)",
      productPrice:50,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-accessories-round-metal-birdhouse-red-16969271836812_600x600.jpg?v=1634227686"
    },
    {
      id:13,
      productName:"Artificial Grass",
      productDetails:"(6.5 X 3 ft / 1.9 x 0.9 m)",
      productPrice:1399,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-accessories-artificial-grass-6-5-x-3-ft-1-9-x-0-9-m-16968602681484_600x600.jpg?v=1634213731"
    },
    {
      id:14,
      productName:"Super Granite Pebbles",
      productDetails:"(Black, Medium, Polished) - 1 kg",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pebbles-super-granite-pebbles-black-medium-polished-1-kg-16969359556748_600x600.jpg?v=1634229497"
    },
    {
      id:15,
      productName:"Stone Sand",
      productDetails:"(White) - 1 kg",
      productPrice:149,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pebbles-stone-sand-white-1-kg-16969352413324_396x396.jpg?v=1634229350"
    },
    {
      id:16,
      productName:"Garden Decor Ideas with Pebbles",
      productDetails:"-",
      productPrice:1099,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pebbles-garden-decor-ideas-with-pebbles-16968870396044_600x600.jpg?v=1634221144"
    },
    {
      id:17,
      productName:"Pebbles Art for Succulents",
      productDetails:"in Glass Terrarium",
      productPrice:299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pebbles-pebbles-art-for-succulents-in-glass-terrarium-16969165832332_396x396.jpg?v=1634225609"
    },
    {
      id:18,
      productName:"Decor Terrarium with Pebbles",
      productDetails:"-",
      productPrice:175,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pebbles-decor-terrarium-with-pebbles-16968817606796_600x600.jpg?v=1634217730"
    },
    {
      id:19,
      productName:"Garden Pebbles",
      productDetails:"(Aqua Green Color, Small) - 1 kg",
      productPrice:279,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pebbles-garden-pebbles-aqua-green-color-small-1-kg-16968870723724_396x396.jpg?v=1634219881"
    }

  ]

}
