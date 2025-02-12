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
    { nome: 'Antonio Russo', img: 'assets/antonio.jpeg', descrizione: 'Antonio è un esperto di...' },
    { nome: 'Riccardo Signoretti', img: 'assets/ricky.jpeg', descrizione: 'Riccardo si occupa di...' },
    { nome: 'Matteo Caroli', img: 'assets/matteo.jpeg', descrizione: 'Matteo è un professionista in...' },
    { nome: 'Diego Randazzo', img: 'assets/diego.jpeg', descrizione: 'Diego ha esperienza in...' }
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
