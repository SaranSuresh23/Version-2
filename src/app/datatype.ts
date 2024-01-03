export interface IBonsai{
      id:number,
      productName:string,
      productDetails:string,
      productPrice:number,
      productImg:string
}
export interface IsignUp{
  name:string,
  email:string,
  password:string
}
export interface IsignIn{
  email:string,
  password:string
}
export interface IOrder {
  userName: string,
  userId: string,
  email: string,
  destination: string,
  id: number | undefined,
  address: string,
  contact: string,
  date: number,
  strength: number,
  packageType: string,
  packagePrice: number,
  status: string,
  orderDate: string
  //packagePriceWithGST: number
}
export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  fullPrice: string;
  thumbnail: string;
  description: string;
  userEmail: string ;
  productId: number;

}



