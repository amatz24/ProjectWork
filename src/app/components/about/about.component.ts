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
    { nome: 'Matteo Caroli', img: 'assets/matteo.jpeg', descrizione: 'Inizialmente, ho creato un repository pubblico su GitHub per permettere ai miei collaboratori di accedere al progetto. Successivamente, ho generato il file Angular e scritto i comandi necessari per creare tutti i componenti e i servizi.  Una volta completata questa fase, mi sono dedicato alla realizzazione della pagina dei drink, sviluppando il file TypeScript, lo stile e l`HTML. In seguito, ho lavorato sulla funzionalità di modifica degli ingredienti del panino, occupandomi in parte anche dell`aggiornamento del prezzo modificato all`interno del carrello.' },
    { nome: 'Diego Randazzo', img: 'assets/diego.jpeg', descrizione: '' }
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
