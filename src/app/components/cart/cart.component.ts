import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Prodotto } from '../../models/Prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:Prodotto[] = []
  constructor(public cartService:CartService){
    this.cart = this.cartService.getAll();
  }

  elimina(prodotto:Prodotto)
  {
    this.cartService.remove(prodotto);
    this.cart = this.cartService.getAll();
  }
}
