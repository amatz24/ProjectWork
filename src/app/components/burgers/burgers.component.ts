import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsServiceTsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../models/Prodotto';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-burgers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent {
  prodotti: Prodotto[]; 
  selectedProduct: any = null; 
  prezzoTotale: number = 0; 


  constructor(private productService: ProductsServiceTsService, private router: ActivatedRoute, public cartService: CartService) {
    this.prodotti = this.productService.getBurger();
  }

  calcolaPrezzo() {
    this.prezzoTotale = this.selectedProduct.Prezzo;
    this.selectedProduct.Ingredienti.forEach((ingrediente: any) => {
      if (ingrediente.checked) {
        this.prezzoTotale += (ingrediente.IncrementoPrezzo || 0) * Math.max(ingrediente.Quantita - ingrediente.QuantitaIniziale, 0);
      }
    });
  
    this.prezzoTotale = parseFloat(this.prezzoTotale.toFixed(2));
  }
  

  openModifica(prodotto: any) {
    this.selectedProduct = { ...prodotto };
    this.selectedProduct.Ingredienti = this.selectedProduct.Ingredienti.map((ingrediente: any) => ({
      ...ingrediente,
      checked: ingrediente.Quantita >= ingrediente.QuantitaMin
    }));
    this.calcolaPrezzo(); 
  }

  modificaQuantita(ingrediente: any, variazione: number) {
    let nuovaQuantita = ingrediente.Quantita + variazione;
    if (nuovaQuantita >= ingrediente.QuantitaMin && nuovaQuantita <= ingrediente.QuantitaMax) {
      ingrediente.Quantita = nuovaQuantita;
    }

    if (ingrediente.Quantita <= ingrediente.QuantitaMin) {
      ingrediente.checked = true;
    }

    this.calcolaPrezzo(); 
  }
  salvaModifiche() {
    this.selectedProduct.Prezzo = this.prezzoTotale;

    this.selectedProduct.Ingredienti = this.selectedProduct.Ingredienti.filter((ingrediente: any) => ingrediente.checked);
  
    this.cartService.add({ ...this.selectedProduct, ingredienti: [...this.selectedProduct.Ingredienti] });
  
    this.closeModifica();
  }


  closeModifica() {
    this.selectedProduct = null;
  }
}
