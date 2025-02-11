import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsServiceTsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-burgers',
  imports: [CommonModule],
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent {
  prodotti : Prodotto[];

  constructor(private productService :ProductsServiceTsService, private router: ActivatedRoute){
    this.prodotti = this.productService.getBurger();
  }
}
