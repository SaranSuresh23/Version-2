import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // productdetails 
  
  productDetails = [
    {
      id:1,
      productName:"Round Egg Ceramic Pot",
      productDetails:"(White) (set of 2)",
      productPrice:250,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-planters-3-7-inch-9-cm-round-egg-ceramic-pot-white-16968461811852_600x600.jpg?v=1634207925"
    },
    {
      id:2,
      productName:"Hibiscus",
      productDetails:"Gudhal Flower(Peach Double)",
      productPrice:269,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-hibiscus-gudhal-flower-peach-double-plant-16968931115148_600x600.jpg?v=1634221736"
    },
    {
      id:3,
      productName:" Kitchen Garden Pack",
      productDetails:"Healthy Vegetable Grown at Home (Seeds with Pots)",
      productPrice:149,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-healthly-vegetables-grown-at-home-kitchen-garden-pack_600x600.jpg?v=1634221534"
    },
    {
      id:4,
      productName:"Round Plastic Planters",
      productDetails:"With 3 tier Hanging Kit (Red,Green,Yellow)",
      productPrice:140,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pots-9-1-inch-23-cm-ronda-no-2320-round-plastic-planters-with-3-tier-hanging-kit-red-green-yellow-16968542552204_600x600.jpg?v=1634210954"
    },
    {
      id:5,
      productName:"DIY Stone Decor Ideas",
      productDetails:"For Water Features",
      productPrice:105,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-pebbles-diy-stone-decor-ideas-for-water-features-16981363982476_600x600.jpg?v=1634218129"
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
      productName:"Pomegranate",
      productDetails:"Anar (Grafted) - Plant",
      productPrice:359,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-pomegranate-annar-anar-grafted-plant-16969218064524_600x600.jpg?v=1646287095"
    },
    {
      id:8,
      productName:"Tomato Seeds",
      productDetails:"Marglobe - Organic Vegetable Seeds",
      productPrice:100,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-tomato-marglobe-organic-vegetable-seeds-16969383641228_600x600.jpg?v=1634205137"
    },
    {
      id:9,
      productName:"Coco peat block ",
      productDetails:"900 g (Expands Up to 8 - 14 L)",
      productPrice:149,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-cocopeat-block-900-g_396x396.jpg?v=1634216408"
    },
    {
      id:10,
      productName:"Bonsai Set No.1025",
      productDetails:" Gardening Tools",
      productPrice:219,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-bonsai-set-no-1025-gardening-tools-16968648360076_396x396.jpg?v=1634214773"
    },
    {
      id:11,
      productName:"Krishna Tulsi",
      productDetails:"Tulsi ( Black ) - 0.5 kg Seeds",
      productPrice:999,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-krishna-tulsi-tulsi-black-0-5-kg-seeds-112929_600x600.png?v=1679750449"
    },
    {
      id:12,
      productName:" Watering Can ",
      productDetails:"Hand Printed Round Metal (Red) - Gardening Tool",
      productPrice:500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-hand-printed-round-metal-watering-can-red-gardening-tool-16968521089164_600x600.jpg?v=1634221032"
    },
    {
      id:13,
      productName:"Peas Azad P 3",
      productDetails:"Desi Vegetable Seeds",
      productPrice:50,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-peas-azad-p-3-desi-vegetable-seeds-16969165766796_600x600.jpg?v=1634204516"
    },
    {
      id:14,
      productName:"Bone Meal Powder",
      productDetails:"500 g",
      productPrice:219,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-fertilizer-bone-meal-powder-250-gm-for-garden_396x396.jpg?v=1634214743"
    },
    {
      id:15,
      productName:"Nutrient-rich soil",
      productDetails:"General purpose potting soil mix - 5 kg",
      productPrice:500,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-soil-and-fertilizers-nutrient-rich-general-purpose-potting-soil-mix-10-kg-16969045966988_396x396.jpg?v=1634224988"
    },

  ]


  

}
