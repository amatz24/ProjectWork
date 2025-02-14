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
  DescriptionExpanded = false;

  persone = [
    { nome: 'Antonio Russo', img: 'assets/antonio.jpeg', descrizione: '' },
    { nome: 'Riccardo Signoretti', 
      img: 'assets/ricky.jpeg', 
      descrizioneBreve: 'Ho iniziato il mio lavoro curando l’header e il footer dell’applicazione, assicurandomi che la barra di navigazione fosse ben strutturata e funzionale. ',
      descrizioneLunga: ' Ho inserito il logo e i collegamenti alle varie sezioni, tra cui panini, bevande, contorni, dolci, carrello e about. Successivamente, mi sono occupato della home, progettandone sia la struttura che lo stile. Ho inserito un carousel di immagini per migliorare l’impatto visivo della pagina. Ho aggiunto un pulsante “Welcome” che introduce l’utente alla selezione del servizio, permettendo di scegliere tra servizio al tavolo o asporto. Nel caso del servizio al tavolo, l’utente deve inserire il numero del tavolo, che viene poi memorizzato nel cartService grazie al collegamento del mio collega Antonio. Ho prestato particolare attenzione all’usabilità e all’estetica, curando il design dei pulsanti e delle sezioni per garantire un’esperienza chiara e intuitiva. Infine, ho lavorato alla pagina About, dove ho inserito una sezione dedicata ai membri del team, inclusa la mia descrizione. Ho reso questa pagina visivamente coerente con il resto dell’applicazione, assicurandomi che fosse ben organizzata e facilmente navigabile. '
    },

    { nome: 'Matteo Caroli', img: 'assets/matteo.jpeg', descrizione: '' },
    { nome: 'Diego Randazzo', img: 'assets/diego.jpeg', descrizione: '' }
  ];

  info(persona: any) {
    this.selectedPerson = persona;
    this.showInfo = true;
  }
  toggleDescription(){
    if(this.selectedPerson)
      this.selectedPerson.DescriptionExpanded = !this.selectedPerson.DescriptionExpanded;

  }
  closeModal() {
    this.showInfo = false;
  }
  constructor(private router: ActivatedRoute){
  }

}
