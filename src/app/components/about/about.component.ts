import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showInfo = false;
  selectedPerson: any = null;

  persone = [
    { nome: 'Antonio Russo', img: 'assets/antonio.jpeg', descrizione: "Nel progetto, mi sono occupato dell'implementazione della pagina 'Burger', del carrello e delle pagine finali 'Paga' e 'Annulla Ordine', oltre alla pagina 'NotFound'. Inoltre, ho sviluppato i relativi componenti, modelli e servizi in Angular e ho gestito la visualizzazione delle quantità degli ingredienti nel carrello" },
    { nome: 'Riccardo Signoretti', img: 'assets/ricky.jpeg', descrizione: '' },
    { nome: 'Matteo Caroli', img: 'assets/matteo.jpeg', descrizione: '' },
    { nome: 'Diego Randazzo', img: 'assets/diego.jpeg', descrizione: 'Nel progetto mi sono dedicato alle pagine dei contorni e dei caffè/dolci. Mi sono anche occupato dello stile della finestra di modifica degli ingredienti dei panini e delle checkbox nella pagina dei drink oltre ad aver perfezionato l incremento del prezzo alla aggiunta degli ingredienti e la grandezza degli elementi nelle pagine burger, drink, dessert e side dish' }
  ];

  info(persona: any) {
    this.selectedPerson = persona;
    this.showInfo = true;
  }

  closeModal() {
    this.showInfo = false;
  }
  constructor(private router: ActivatedRoute){
  }

}
