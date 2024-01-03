import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {FormGroup,FormBuilder, FormControl,Validators} from '@angular/forms'
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
    serverErrorMessage:string="";

   // wishlist=[];
    //cart=[];
    constructor(private formBuilder:FormBuilder ,private userService:UserService,private route:Router,private http:HttpClient) { }

    ngOnInit() {
      this.signupForm=this.formBuilder.group(
        {
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
        },{validator: this.passwordMatchValidator});
        //, { validator: this.passwordMatchValidator });
      }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  onSubmit() {
    var userdata=this.signupForm.value
    this.userService.addUserInformation(userdata).subscribe(data=>{
      localStorage.clear();
      localStorage.setItem('username',this.signupForm.value.username);
      alert("Register Successfully");
      this.route.navigate(["login"]);
    })
    sessionStorage.setItem('name','username');
  }

}

/*if (this.signupForm.invalid) {
  // Display error messages or take appropriate action
  console.log('Form is invalid');
  this.serverErrorMessage = 'Invalid form submission.';
  return;

  const userDetails = this.signupForm.value;
  // Call the service method to update user details in the JSON database
  this.db.addUser(userDetails);
}*/

