import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Prodotto } from '../../models/Prodotto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductsServiceTsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:Prodotto[] = [];
  showAlert: boolean = false; 
  selectedProduct: any = null;
  constructor(public cartService:CartService, private router:Router ,public productService:ProductsServiceTsService ){
    this.cart = this.cartService.getAll();
  }
  prezzoTot(prodotto:Prodotto[]){

  }
  elimina(prodotto:Prodotto)
  {
    this.cartService.remove(prodotto);
    this.cart = this.cartService.getAll();
  }
  incrementaQuantita(prodotto: Prodotto) {
    prodotto.Quantita++;
  }

  decrementaQuantita(prodotto: Prodotto) {
    if (prodotto.Quantita > 1) {
      prodotto.Quantita--;
    }
 }
 calcolaTotale(): number {
  return this.cart.reduce((totale, prodotto) => totale + (prodotto.Prezzo * prodotto.Quantita), 0);
}

paga() {
  if (this.cart.length === 0) {
    this.showAlert = true; // Mostra l'alert
  } else {
    this.showAlert = false; // Nascondi l'alert (se era visibile)
    this.router.navigate(['/success']); // Reindirizza alla pagina di successo
  }
}
}
