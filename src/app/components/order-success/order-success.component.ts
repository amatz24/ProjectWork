import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-success',
  imports: [CommonModule],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {
  numTable:string = ""
  num: number;
 constructor(private cartService:CartService){
  this.numTable = this.cartService.getNumTable()
  this.num = Math.floor(Math.random() * 100) + 1;
 }
 
}
