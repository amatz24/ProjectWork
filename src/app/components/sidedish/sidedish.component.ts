import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsServiceTsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-sidedish',
  imports: [CommonModule],
  templateUrl: './sidedish.component.html',
  styleUrl: './sidedish.component.css'
})
export class SidedishComponent {
     prodotti : Prodotto[];
          constructor(public productService :ProductsServiceTsService, private router: ActivatedRoute){
            this.prodotti = this.productService.getSideDish();
          }
}
