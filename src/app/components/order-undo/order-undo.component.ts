import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-undo',
  imports: [CommonModule,RouterLink],
  templateUrl: './order-undo.component.html',
  styleUrl: './order-undo.component.css'
})
export class OrderUndoComponent {
    num: number;
   constructor(private cartService:CartService){

    this.num = Math.floor(Math.random() * 100) + 1;
   }

}
