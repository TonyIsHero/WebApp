import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  defaultemail ='admin@gmail.com';
  defaultpassword = 'password';
  isNew=true;
  
  loginData={
    username:'',
    password:''
  };

  signupData={
    username:'',
    email:'',
    password:'',
  }
  onSignup(){
    this.isNew=true;
    console.log(this.isNew);
    this.authService.signup(this.signupData).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err)
    });
  }

  toggleLogin(){
    this.isNew=false;
  }
  onLogin(){
    console.log(this.loginData);
        this.authService.login(this.loginData).subscribe({
      next: (res) => console.log("Login Successful"),
      error: (err) => console.error(err)
    });
  }
}
