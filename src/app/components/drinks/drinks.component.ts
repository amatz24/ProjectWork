import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceTsService } from '../../services/products.service';
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-drinks',
  imports: [],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  prodotti: Prodotto[];
  constructor(private productsService: ProductsServiceTsService,
    private route: ActivatedRoute) {
      this.prodotti = this.productsService.getProduct();
  };
}

