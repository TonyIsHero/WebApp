import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavbarTopComponent } from "../../shared/navbar-top/navbar-top.component";
import { RouterOutlet } from '@angular/router';
import { NavbarSideComponent } from '../../shared/navbar-side/navbar-side.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarTopComponent, RouterOutlet, NavbarSideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

