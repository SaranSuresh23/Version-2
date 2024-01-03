import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient  } from '@angular/common/http';
import { Router , ActivatedRoute} from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { DataService } from 'src/app/services/data.service';
import { IBonsai, IsignIn, IsignUp } from 'src/app/datatype';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/*export class LoginComponent implements OnInit{

  login:FormGroup|any;
  retUrl="";
  name:string='';
  constructor(private http:HttpClient ,private route:Router,private data:DataService, private router:ActivatedRoute) {
    this.router.queryParams.subscribe(data=>{
      this.retUrl=data['retUrl'];
    })
  }
  ngOnInit(){
    this.login=new FormGroup({
    'username':new FormControl(),
    'password':new FormControl()
  })
  //localStorage.setItem('username',this.login.username);
  if(this.retUrl!=null)
  this.route.navigate([this.retUrl]);
}
logindata(login:any){
  this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
    const user =res.find((a:any)=>{
      return a.username===this.login.value.username && a.password===this.login.value.password;
        // this.data.dataemit(this.name)
      });
      if(user)
      {
        alert("Login Successful!!");
        localStorage.clear();
        localStorage.setItem('username',login.value.username);
        this.login.reset();
        this.route.navigate(['home']);
      }else{
        alert("User not found! or something went wrong!");
      }
     })
  }
}*/
export class LoginComponent implements OnInit {

  showSignIn: boolean = true
  authError: string = ""

  constructor(private userService: UserService, private adminService: AdminService) { }

  ngOnInit() {
    this.userService.userAuthReload()
    this.adminService.reloadAdmin()
  }
  signUp(data: IsignUp){
    this.userService.userSignUp(data)
  }
  signIn(data: IsignIn){
    this.userService.userSignin(data)
    this.userService.invalidUserAuth.subscribe((result)=>{
      console.log(result)
      if(result){
        this.authError = "Invalid Login Credentials ☹"
      }

    })

    this.adminService.userSignIn(data)
    this.adminService.isLoginError.subscribe((isError)=>{
      if(isError) {
        this.authError="Invalid Login Credentials ☹"
      }
    })
  }
  openSignIn(){
    this.showSignIn = true
  }
  openSignUp(){
    this.showSignIn = false
  }
}
