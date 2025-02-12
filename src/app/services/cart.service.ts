import { Injectable } from '@angular/core';
import { Prodotto } from '../models/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Prodotto[] = [];
  constructor() { }
  getAll():Prodotto[] {
    return this.cart;
  }
  remove(prodotto:Prodotto) {
    this.cart = this.cart.filter(b => b.Id !== prodotto.Id);
  }
  add(prodotto:Prodotto) : boolean {
    if( this.cart.find(b => b.Id === prodotto.Id)==undefined ) 
    {
      this.cart.push(prodotto);
      return true;
    }
    return false;
  } 
}
