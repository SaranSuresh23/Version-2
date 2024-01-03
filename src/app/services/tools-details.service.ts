import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBonsai } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ToolsDetailsService {


  constructor(private http:HttpClient) { }
  toolProducts(){
    return this.http.get<IBonsai[]>("http://localhost:3000/tools")
   }
   getTool(id: string){
    return this.http.get<IBonsai>(`http://localhost:3000/tools/${id}`)
  }
  editTool(product:IBonsai){
    return this.http.put<IBonsai>(`http://localhost:3000/tools/${product.id}`,product)
  }
  addTool(data:IBonsai){
    return this.http.post('http://localhost:3000/tools',data)
  }
  deleteTool(id:number){
    return this.http.delete(`http://localhost:3000/tools/${id}`)
  }
  // accessoriesdetails

  productDetails = [
    {
      id:1,
      productName:"Plastic Hand Trowel No. 1021",
      productDetails:"Gardening Tool",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-plastic-hand-trowel-no-1021-gardening-tool-16969208725644_600x600.jpg?v=1634226304"
    },
    {
      id:2,
      productName:"Set of 7 Garden Tool Kit",
      productDetails:"Gardening Tools",
      productPrice:499,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-set-of-7-garden-tool-kit-set--gardening-tools-823036_600x600.jpg?v=1681215190"
    },
    {
      id:3,
      productName:"Bonsai Set No.1025 - Gardening Tools",
      productDetails:"-",
      productPrice:259,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-bonsai-set-no-1025-gardening-tools-16968648360076_600x600.jpg?v=1634214773"
    },
    {
      id:4,
      productName:"Pressure Sprayer",
      productDetails:"(1.5 ltr) - Gardening Tool",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-pressure-sprayer-1-5-ltr-gardening-tool-16969224683660_600x600.jpg?v=1634226866"
    },
    {
      id:5,
      productName:"Pruning Shear No. MMI 58",
      productDetails:"Gardening Tool",
      productPrice:199,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-pruning-shear-no-mmi-58-gardening-tool-16969227796620_600x600.jpg?v=1634226916"
    },
    {
      id:6,
      productName:"Gardening Water Can No. 1118",
      productDetails:"(10 ltr) - Gardening Tool",
      productPrice:575,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-gardening-water-can-no-1118-10-ltr-gardening-tool-16968872362124_600x600.jpg?v=1634220060"
    },
    {
      id:7,
      productName:"Hand Fork Plain No. 1004",
      productDetails:"Gardening Tool",
      productPrice:100,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-hand-fork-plain-no-1004-gardening-tool-16968866234508_600x600.jpg?v=1634220986"
    },
    {
      id:8,
      productName:"Khurpa Steel Handle with Grip",
      productDetails:"3 inch (8 cm) - Gardening Tool",
      productPrice:159,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-3inch-khurpa-steel-handle-with-grip-mmi-89_600x600.jpg?v=1634208199"
    },
    {
      id:9,
      productName:"3 Prong Hand Cultivator No. MMI 84",
      productDetails:"Gardening Tool",
      productPrice:99,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-3-prong-hand-cultivator-no-mmi-84-gardening-tool-16968469086348_600x600.jpg?v=1634207627"
    },
    {
      id:10,
      productName:"All in One Garden Essentials Kit",
      productDetails:"Garden kit",
      productPrice:859,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-all-in-one-garden-essentials-kit-1-500579_305x305.jpg?v=1679749034"
    },
    {
      id:11,
      productName:"Hand Printed Round Metal Watering ",
      productDetails:"(Red) - Gardening Tool",
      productPrice:549,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-hand-printed-round-metal-watering-can-red-gardening-tool-16968521089164_600x600.jpg?v=1634221032"
    },
    {
      id:12,
      productName:"Kitchen Garden Hand Tool Kit",
      productDetails:"Gardening Tools",
      productPrice:750,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-kitchen-garden-hand-tool-kit-gardening-tools-16968986493068_600x600.jpg?v=1634223029"
    },
    {
      id:13,
      productName:"Basic Garden Cutting Tool Kit",
      productDetails:"Gardening Tools",
      productPrice:599,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-basic-garden-cutting-tool-kit_305x305.jpg?v=1634214056"
    },
    {
      id:14,
      productName:"Khurpa with Wooden Color Handle",
      productDetails:"5 inch (13 cm) - Gardening Tool",
      productPrice:299,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-5-inch-13-cm-khurpa-with-wooden-color-handle-no-1017-gardening-tool-16968513519756_600x600.jpg?v=1634209247"
    },
    {
      id:15,
      productName:"Digging Fork No. 1085",
      productDetails:"Gardening Tool",
      productPrice:749,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-digging-fork-no-1085-gardening-tool_600x600.jpg?v=1634218611"
    },
    {
      id:16,
      productName:"Children Tool Set No. 1132",
      productDetails:"Gardening Tools",
      productPrice:499,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-children-tool-set-no-1132-gardening-tools-16968777924748_600x600.jpg?v=1634215998"
    },
    {
      id:17,
      productName:"Hedge Shear with Wooden Handle",
      productDetails:"Gardening Tool",
      productPrice:399,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-hedge-shear-with-wooden-handle-no-mmi-78-gardening-tool-16968925118604_600x600.jpg?v=1634221563"
    },
    {
      id:18,
      productName:"Leaf Rake No. MMI-100",
      productDetails:"(16 Tines) - Gardening Tool",
      productPrice:495,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-gardening-tools-leaf-rake-no-mmi-100-16-tines-gardening-tool-16968609595532_600x600.jpg?v=1634227069"
    },
    {
      id:19,
      productName:"Garden Essential Plant Food and Protection Kit",
      productDetails:"",
      productPrice:579,
      productImg:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-garden-essential-plant-food-and-protection-kit-309425_600x600.jpg?v=1679750046"
    }

  ]

}
