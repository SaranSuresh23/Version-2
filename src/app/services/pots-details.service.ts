import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class PotsDetailsService {

  constructor(private http:HttpClient) { }
  potProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/pots")
   }
   getPot(id: string){
    return this.http.get<IBonsai>(`http://localhost:3000/pots/${id}`)
  }
  editPot(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/pots/${product.id}`,product)
  }
  addPot(data:IBonsai){
    return this.http.post('http://localhost:3000/pots',data)
  }
  deletePot(id:number){
    return this.http.delete(`http://localhost:3000/pots/${id}`)
  }
  // potdetails

  productDetails = [
    {
      id:1,
      productName:"Handi Shape Ceramic Pot ",
      productDetails:"(Yellow) (set of 2)",
      productPrice:350,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-inch-8-cm-handi-shape-round-ceramic-pot-yellow-16968466792588_600x600.jpg?v=1634208193"
    },
    {
      id:2,
      productName:"Buddha Marble Finish Ceramic Pot ",
      productDetails:"(White)",
      productPrice:500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-4-3-inch-11-cm-buddha-marble-finish-ceramic-pot-white-16968478359692_600x600.jpg?v=1634208431"
    },
    {
      id:3,
      productName:"SML-015 Diamond Hanging Planter",
      productDetails:"(Gold color) - Fiberglass material",
      productPrice:899,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-9-8-inch-25-cm-sml-015-diamond-hanging-fiberglass-planter-golden-color-16968540356748_600x600.png?v=1601350582"
    },
    {
      id:4,
      productName:"Eco Friendly Jute Grow Bag",
      productDetails:"(Brown) pack of 4",
      productPrice:500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-8-5-inch-22-cm-eco-friendly-jute-grow-bag-brown-16968535867532_600x600.jpg?v=1634212759"
    },
    {
      id:5,
      productName:"Round Egg Ceramic Pot",
      productDetails:"(White) (set of 2)",
      productPrice:250,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-7-inch-9-cm-round-egg-ceramic-pot-white-16968461811852_600x600.jpg?v=1634207925"
    },
    {
      id:6,
      productName:"Square Grow Bag",
      productDetails:"(White) (set of 5)",
      productPrice:250,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-6-3-inch-16-cm-square-grow-bag-white-16968513880204_600x600.jpg?v=1634210830"
    },
    {
      id:7,
      productName:"Round Plastic Planters",
      productDetails:"With 3 tier Hanging Kit (Red,Green,Yellow)",
      productPrice:1500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pots-9-1-inch-23-cm-ronda-no-2320-round-plastic-planters-with-3-tier-hanging-kit-red-green-yellow-16968542552204_600x600.jpg?v=1634210954"
    },
    {
      id:8,
      productName:"Round Grow Bag",
      productDetails:"(Green) (set of 4)",
      productPrice:550,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-12-inch-30-cm-round-grow-bag-green-16968405450892_600x600.jpg?v=1634206102"
    },
    {
      id:9,
      productName:"Aching Hanging Round Metal Pot",
      productDetails:"With Chain (Pink) (set of 2)",
      productPrice:499,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-6-5-inch-17-cm-aching-hanging-round-metal-pot-with-chain-pink-16968509915276_600x600.jpg?v=1634209943"
    },
    {
      id:10,
      productName:"Handi Shape Ceramic Pot",
      productDetails:"(Red) (set of 2)",
      productPrice:30,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-inch-8-cm-handi-shape-round-ceramic-pot-red-16968466169996_600x600.jpg?v=1634208184"
    },
    {
      id:11,
      productName:"Corsica no.18 Hanging Plastic Pots",
      productDetails:"(Multi-Color) (pack of 6) (Round)",
      productPrice:449,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pots-7-1-inch-18-cm-corsica-no-18-hanging-round-plastic-pots-mix-color-pack-of-six-16968525480076_600x600.jpg?v=1634210178"
    },
    {
      id:12,
      productName:"Rectangle Grow Bag",
      productDetails:"(Green) (set of 5)",
      productPrice:599,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-18-inch-46-cm-rectangle-grow-bag-green-16968438939788_600x600.jpg?v=1634207009"
    },
    {
      id:13,
      productName:"Round Plastic Thermoform Pot",
      productDetails:"5.1 inch (13 cm) (Mix Color) - Pack of 20",
      productPrice:259,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-5-1-inch-13-cm-round-thermoform-pot-mix-color-pack-of-twenty_600x600.jpg?v=1634209365"
    },
    {
      id:14,
      productName:"Plastic Germination Tray",
      productDetails:"(70 Cells, Round) (set of 5)",
      productPrice:420,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-germination-tray-70-cells-round-pack-of-5-16968878358668_300x300.png?v=1601351589"
    },
    {
      id:15,
      productName:"Square Glass Vase",
      productDetails:"2 inch (5 cm) (9 inch (23 cm) Height)",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-2-inch-5-cm-square-glass-vase-9-inch-23-cm-height-16968447295628_600x600.jpg?v=1634207062"
    },
    {
      id:16,
      productName:"Wooden Finish Self Watering Planter",
      productDetails:"11.3 inch (29 cm) (Brown) (Round) - Plastic material",
      productPrice:1099,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-11-3-inch-29-cm-ronda-no-2926-wooden-finish-self-watering-round-plastic-planter-brown-16968378515596_600x600.jpg?v=1634205654"
    },
    {
      id:17,
      productName:"Bonsai Square Ceramic Pot",
      productDetails:"5.1 inch (13 cm) (Brown) (set of 2)",
      productPrice:499,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-5-1-inch-13-cm-bonsai-square-ceramic-pot-brown-16968496283788_902x902.jpg?v=1634209920"
    },
    {
      id:18,
      productName:"Round Egg Ceramic Pot With Plate",
      productDetails:"3.7 inch (9 cm) (White, Light Peach) (set of 2)",
      productPrice:399,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-7-inch-9-cm-cp005-round-egg-ceramic-pot-with-plate-white-light-peach-16968459255948_600x600.jpg?v=1634207846"
    },
    {
      id:19,
      productName:"Elephant Shape Marble Finish Pot",
      productDetails:"3.7 inch (9 cm) (White) (set of 2) - Ceramic Pot",
      productPrice:599,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-7-inch-9-cm-elephant-shape-marble-finish-ceramic-pot-white-16968461451404_600x600.jpg?v=1634207908"
    },
    {
      id:20,
      productName:"Plastic Germination Tray",
      productDetails:"(102 Cells, Round) (set of 5)",
      productPrice:399,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-germination-tray-104-cells-round-16968877965452_600x600.jpg?v=1634226285"
    },
    {
      id:21,
      productName:"Stone Finish Rotomoulded Planter",
      productDetails:"23.6 inch (60 cm) (Grey) (Square) - Plastic material",
      productPrice:4599,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-23-6-inch-60-cm-cubo-no-60-stone-finish-square-rotomoulded-plastic-planter-grey-16968451391628_305x305.jpg?v=1634207333"
    }

  ]

}
