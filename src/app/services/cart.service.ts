import { Injectable } from '@angular/core';
import { Prodotto } from '../models/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Prodotto[] = [];
  private numTable:string = "";
  constructor() { }
  getAll():Prodotto[] {
    return this.cart;
  }
  remove(prodotto:Prodotto) {
    this.cart = this.cart.filter(b => b.Id !== prodotto.Id);
  }
  add(prodotto: Prodotto): boolean {
    // Controlliamo se esiste già un panino IDENTICO nel carrello (stesso Id e stessi ingredienti)
    let item = this.cart.find(b => 
      b.Id === prodotto.Id &&
      JSON.stringify(b.Ingredienti) === JSON.stringify(prodotto.Ingredienti)
    );
  
    if (item) {
      // Se il panino è già nel carrello con gli stessi ingredienti, aumenta solo la quantità
      item.Quantita += 1;
      return false;
    } else {
      // Altrimenti, aggiungi una nuova istanza del panino modificato come se fosse un panino diverso
      this.cart.push({ ...prodotto, Quantita: 1 });
      return true;
    }
  } 
  reset(){
    this.cart = [];
    this.numTable = ""
  }
  setNumTable(n:string){
    this.numTable = n;
  }
  getNumTable(){
    return this.numTable;
  }
  get count():number {
    return this.cart.length;
  }
}
