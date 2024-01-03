import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class FertilizersDetailsService {

  constructor(private http:HttpClient) { }
  fertilizerProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/fertilizer")
   }
   getFertilizer(id: string){
    return this.http.get<IBonsai>(`http://localhost:3000/fertilizer/${id}`)
  }
  editFertilizer(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/fertilizer/${product.id}`,product)
  }
  addFertilizer(data:IBonsai){
    return this.http.post('http://localhost:3000/fertilizer',data)
  }
  deleteFertilizer(id:number){
    return this.http.delete(`http://localhost:3000/fertilizer/${id}`)
  }

  // accessoriesdetails

  productDetails = [
    {
      id:1,
      productName:"Vermicompost",
      productDetails:"1 kg (Set of 2)",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-vermicompost-1-kg-set-of-2-995020_305x305.jpg?v=1680589608"
    },
    {
      id:2,
      productName:"Plant O Boost",
      productDetails:"(Overall Growth Booster, 10 g) (set of 10)",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-plant-o-boost-overall-growth-booster-10-g-16969206333580_600x600.jpg?v=1634226255"
    },
    {
      id:3,
      productName:"Home Compost Kit",
      productDetails:"(For Family of 2)",
      productPrice:1759,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-home-compost-kit-for-family-of-2_600x600.jpg?v=1634221853"
    },
    {
      id:4,
      productName:"Plant O Boost",
      productDetails:"(Special Flower Booster, 10 g) (set of 10)",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-plant-o-boost-special-flower-booster-10-g-16969206399116_600x600.jpg?v=1634226259"
    },
    {
      id:5,
      productName:"My Organic Garden",
      productDetails:"(Plant Protection and Enhancer Kit)",
      productPrice:1399,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-my-organic-garden-plant-protection-and-enhancer-kit-16969040691340_600x600.jpg?v=1634224620"
    },
    {
      id:6,
      productName:"Pack of Vermicompost & Neem Cake",
      productDetails:"For House Plants",
      productPrice:175,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pack-of-vermicompost-and-neem-cake-for-house-plants-126156_600x600.jpg?v=1680946859"
    },
    {
      id:7,
      productName:"Potting Soil Mix for Flowering Plants",
      productDetails:"5 kg",
      productPrice:500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-potting-soil-mix-for-flowering-plants-5-kg-16969330360460_938x938.jpg?v=1634226780"
    },
    {
      id:8,
      productName:"Nutrient-rich Potting Soil Mix",
      productDetails:" 5 kg (Set of 2)-general purpose potting soil",
      productPrice:259,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-10-kg-16969045934220_600x600.jpg?v=1634224995"
    },
    {
      id:9,
      productName:"Potting Soil Mix for Bonsai Plants",
      productDetails:"3 kg",
      productPrice:549,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-soil-and-fertilizers-potting-soil-mix-for-bonsai-plants-3-kg-138409_600x600.jpg?v=1679750946"
    },
    {
      id:10,
      productName:"Potting Soil Mix ",
      productDetails:"3 kg - For Cactus and Succulent plants",
      productPrice:359,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-soil-and-fertilizers-potting-soil-mix-for-cactus-and-succulent-plants-3-kg-584375_600x600.jpg?v=1679750946"
    },
    {
      id:11,
      productName:"Potting Soil Mix for Seeds Gardening",
      productDetails:"5 kg",
      productPrice:349,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-potting-soil-mix-for-seeds-gardening-5-kg-16969330950284_600x600.jpg?v=1634226798"
    },
    {
      id:12,
      productName:"General Purpose Potting Soil Mix",
      productDetails:"5 kg - For Garden",
      productPrice:290,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-general-purpose-garden-potting-soil-mix-5-kg-16968874164364_938x938.jpg?v=1634220123"
    },
    {
      id:13,
      productName:"Exfoliated Vermiculite ",
      productDetails:"250 g",
      productPrice:139,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-exfoliated-vermiculite-250-g-16968852504716_938x938.jpg?v=1634219287"
    },
    {
      id:14,
      productName:"Moss Peat",
      productDetails:"5 kg",
      productPrice:699,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-moss-peat-5-kg-16969036464268_938x938.jpg?v=1634224461"
    },
    {
      id:15,
      productName:"Expanded Clay Aggregate",
      productDetails:"(Clay Balls) - 1 kg",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-expanded-clay-aggregate-clay-balls-1-kg-16969218818188_938x938.jpg?v=1634219302"
    },
    {
      id:16,
      productName:"Combo to Make Soil Porous",
      productDetails:"Perlite and Vermiculite combo",
      productPrice:299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pack-of-2-additives-to-make-soil-porous-257070_305x305.jpg?v=1680946857"
    },
    {
      id:17,
      productName:"Pumice Stones",
      productDetails:"1 kg",
      productPrice:299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-pumice-stones-1-kg-16969232121996_600x600.jpg?v=1634227135"
    },
    {
      id:18,
      productName:"Coco peat block",
      productDetails:"900 g (Expands Up to 8 - 14 L)",
      productPrice:125,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-cocopeat-block-900-g_600x600.jpg?v=1634216408"
    },
    {
      id:19,
      productName:"Coco Husk Block",
      productDetails:"4.5 kg",
      productPrice:579,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-coco-husk-block-4-5-kg-16968789753996_600x600.jpg?v=1634216398"
    },
    {
      id:20,
      productName:"Coir Coin",
      productDetails:"(Netted, 30 mm) (Set of 50)",
      productPrice:379,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-coir-coin-netted-30-mm-pack-of-50_600x600.jpg?v=1634216432"
    }

  ]

}
