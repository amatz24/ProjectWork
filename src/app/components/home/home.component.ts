import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showForm = false;
  serviceSelected = false;
  asportoSelected = false;
  tableConfirmed = false;

  resetSelection() {
    this.showForm = true;
    this.serviceSelected = false;
    this.asportoSelected = false;
    this.tableConfirmed = false;
  }

  selectService() {
    this.serviceSelected = true;
    this.asportoSelected = false; 
    this.tableConfirmed = false; 
  }

  selectAsporto() {
    this.asportoSelected = true;
    this.serviceSelected = false; 
    this.tableConfirmed = false;
  }

  confirmTable(value: string) {
    console.log("Numero tavolo selezionato:", value);
    this.tableConfirmed = true;
    this.serviceSelected = false; 
  }
  constructor(private cartService:CartService) {
    this.cartService.reset()
  }
}