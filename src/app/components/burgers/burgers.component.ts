import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsServiceTsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../../models/Prodotto';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-burgers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css'
})
export class BurgersComponent {
  prodotti: Prodotto[]; // Array di tutti i prodotti
  selectedProduct: any = null; // Prodotto selezionato per modifica
  prezzoTotale: number = 0; // Prezzo totale dinamico
  

  constructor(private productService: ProductsServiceTsService, private router: ActivatedRoute, public cartService: CartService) {
    this.prodotti = this.productService.getBurger();
  }

  // Funzione per calcolare il prezzo del prodotto basato sugli ingredienti
 calcolaPrezzo() {
  this.prezzoTotale = this.selectedProduct.Prezzo; // Prezzo base del prodotto
  this.selectedProduct.Ingredienti.forEach((ingrediente: any) => {
    if (ingrediente.checked) {
      // Se l'ingrediente è selezionato, aggiungi l'incremento
      this.prezzoTotale += (ingrediente.IncrementoPrezzo || 0) * Math.max(ingrediente.Quantita-ingrediente.QuantitaIniziale, 0);
    }
  });
}
  
  // Apri il modale di modifica
  openModifica(prodotto: any) {
    this.selectedProduct = { ...prodotto }; 
    this.selectedProduct.Ingredienti = this.selectedProduct.Ingredienti.map((ingrediente: any) => ({
      ...ingrediente,
      checked: ingrediente.Quantita >= ingrediente.QuantitaMin
    }));
    this.calcolaPrezzo(); // Calcola il prezzo iniziale quando il modale si apre
  }

  // Modifica la quantità dell'ingrediente rispettando i limiti
  modificaQuantita(ingrediente: any, variazione: number) {
    let nuovaQuantita = ingrediente.Quantita + variazione;
    if (nuovaQuantita >= ingrediente.QuantitaMin && nuovaQuantita <= ingrediente.QuantitaMax) {
      ingrediente.Quantita = nuovaQuantita;
    }

    // Se la quantità diventa minore del minimo, forziamo la checkbox a essere selezionata
    if (ingrediente.Quantita <= ingrediente.QuantitaMin) {
      ingrediente.checked = true;
    }

    this.calcolaPrezzo(); // Ricalcola il prezzo ogni volta che la quantità cambia
  }

  // Toggle per selezionare o deselezionare un ingrediente (senza checkbox)
  toggleIngrediente(ingrediente: any) {
    ingrediente.checked = !ingrediente.checked;

    if (ingrediente.checked) {
      ingrediente.Quantita = ingrediente.QuantitaMin;  // Impostiamo la quantità al minimo quando selezionato
    } else {
      ingrediente.Quantita = 0;  // Impostiamo la quantità a 0 quando deselezionato
    }
    this.calcolaPrezzo();  // Ricalcoliamo il prezzo
  }

  // Salva le modifiche e chiudi il modale
  salvaModifiche() {
    this.selectedProduct.Ingredienti = this.selectedProduct.Ingredienti.filter((ingrediente: any) => ingrediente.checked);
    this.closeModifica();
  }

  // Chiudi il modale senza salvare
  closeModifica() {
    this.selectedProduct = null;
  }
}
