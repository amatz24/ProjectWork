import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceTsService } from '../../services/products.service';
import { Prodotto } from '../../models/Prodotto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-drinks',
  imports: [CommonModule, FormsModule],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  prodotti: Prodotto[];
  constructor(private productsService: ProductsServiceTsService,
    private route: ActivatedRoute, public cartService :CartService) {
      this.prodotti = this.productsService.getDrink();
      this.prodotti.forEach(prodotto => {
        prodotto.conGhiaccio = false; 
      });
  };
}

