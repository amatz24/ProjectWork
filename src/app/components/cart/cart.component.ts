import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Prodotto } from '../../models/Prodotto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:Prodotto[] = [];
  selectedProduct: any = null;
  constructor(public cartService:CartService){
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
    // Puoi aggiungere qui la logica per aggiornare la quantità nel servizio se necessario
  }

  decrementaQuantita(prodotto: Prodotto) {
    if (prodotto.Quantita > 1) {
      prodotto.Quantita--;
      // Puoi aggiungere qui la logica per aggiornare la quantità nel servizio se necessario
    }
 }
 calcolaTotale(): number {
  return this.cart.reduce((totale, prodotto) => totale + (prodotto.Prezzo * prodotto.Quantita), 0);
}

}
