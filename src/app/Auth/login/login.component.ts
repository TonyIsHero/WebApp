import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isNew=true;
  onSignup(){
    this.isNew=true;
    console.log(this.isNew);
  }

  toggleLogin(){
    this.isNew=false;
  }
  onLogin(){
    console.log("Login Success");
  }
}
