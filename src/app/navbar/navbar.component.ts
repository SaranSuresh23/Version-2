import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBonsai } from '../datatype';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuType: string = 'default';
  adminName:string="";
  userName:string="";
  searchResult:undefined|IBonsai[];
  cartItems=0;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (sessionStorage.getItem('admin') && val.url.includes('admin')) {
         let adminStore=sessionStorage.getItem('admin');
         let adminData =adminStore && JSON.parse(adminStore)[0];
         this.adminName=adminData.name;
          this.menuType = 'admin';
        }
        else if(sessionStorage.getItem('user')){
          let userStore = sessionStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';

        }
         else {
          this.menuType = 'default';
        }
      }
    });

  }
  logout(){
    sessionStorage.removeItem('admin');
    this.route.navigate(['/'])
  }

  userLogout(){
    sessionStorage.removeItem('user');
    this.route.navigate(['/login'])

  }


 /* isAdmin: boolean = false;
  isUser: boolean = false;

  menuType: string = 'default';
  adminName: string = ""
  userName: string = ""

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((value: any) => {
      if(value.url){
        //console.warn(value.url)
        if(sessionStorage.getItem('admin') && value.url.includes('admin')){
          //console.warn("Admin Page")
          let adminStore = sessionStorage.getItem('admin');
          let adminData = adminStore && JSON.parse(adminStore)[0];
          this.adminName = adminData.name;
          this.menuType = 'admin';
          //console.warn(this.menuType)
        }
        else if(sessionStorage.getItem('user')){
          let userStore = sessionStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore)
          this.userName = userData.name
          this.menuType = 'user';
          console.warn(this.userName)
          //console.warn(this.menuType)
        }
        else{
          //console.warn("Outside Admin Page")
          this.menuType = 'default';
          //console.warn(this.menuType)
        }
      }
    })

    const adminData = sessionStorage.getItem('admin');
    const userData = sessionStorage.getItem('user');
    const currentUrl = this.router.url;

    if (adminData && currentUrl.includes('admin')) {
      this.isAdmin = true;
    } else if (userData) {
      this.isUser = true;
    }


  }
  logout() {
    sessionStorage.removeItem('admin')
    this.router.navigate(['/home'])
  }
  userLogout() {
    sessionStorage.removeItem('user')
    this.router.navigate(['/login'])

  }*/
}
