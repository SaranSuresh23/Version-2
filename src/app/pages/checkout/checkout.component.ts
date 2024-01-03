import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBonsai, IOrder } from 'src/app/datatype';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {


   /* userData: any = {};
    packageData: any
    orderMsg: string | undefined
    selectedPackageType: string | undefined
    selectedDestination: string | undefined
    isDropdownValid = false
    packagePrice: any
    totalPeople: any
    tomorrow: string | undefined
    dropdownData: IBonsai[] | undefined
    dropdownSouthData: IBonsai[] | undefined
    dropdownEastData: IBonsai[] | undefined
    dropdownWestData: IBonsai[] | undefined





    constructor(private cartService:CartService,private activatedRoute: ActivatedRoute, private router: Router) {
      const data = sessionStorage.getItem('user');
      console.log(data)
      if (data) {
        this.userData = JSON.parse(data);
      }

      const today = new Date();
      today.setDate(today.getDate() + 1);
      this.tomorrow = today.toISOString().split('T')[0];
    }

    ngOnInit() {



    }

    orderNow(data: {userName: string, email: string, address: string, contact: string, destination: string, strength: number, date: number, packageType: string,status: string}){
      let user = sessionStorage.getItem('user')
      let userId = user && JSON.parse(user).id
      let currentDate = new Date();
      let day = String(currentDate.getDate()).padStart(2, '0');
      let month = String(currentDate.getMonth() + 1).padStart(2, '0');
      let year = currentDate.getFullYear();

      /*const travelDate = new Date(data.date);
      if (travelDate <= currentDate || travelDate.getDate() === currentDate.getDate()) {
        data.status = 'Expired';
      }
      else {
        data.status = 'Active';
      }

      let orderData: IOrder={
        ...data,
        userId,
        id: undefined,
        packagePrice: this.packagePrice,
        //packagePrice
        userName: this.userData.name,
        email: this.userData.email,
        orderDate: `${day}-${month}-${year}`,
        status: "Active"
      }
      console.log(orderData)
      this.cartService.orderNow(orderData).subscribe((result)=>{
        if(result){
          console.log(result)
          this.orderMsg = "Order has been placed";
          alert("Thank You For Choosing Us❤ Our Team Will Contact You Shortly For Further Details")
          //this.router.navigate(['/orders'])

        }
      })
      setTimeout(() => {
        //this.orderMsg = undefined;
        //this.orderMsg = "Order has been placed";
        this.router.navigate(['/home'])
      }, 2000);
    }
  }*/
}

