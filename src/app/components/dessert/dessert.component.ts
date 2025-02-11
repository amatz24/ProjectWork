import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsServiceTsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../models/Prodotto';


@Component({
  selector: 'app-dessert',
  imports: [],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
    prodotti : Prodotto[];
      constructor(public productService :ProductsServiceTsService, private router: ActivatedRoute){
        this.prodotti = this.productService.getProduct();
      }
}
