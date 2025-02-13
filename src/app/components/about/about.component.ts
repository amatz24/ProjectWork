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
    { nome: 'Antonio Russo', img: 'assets/antonio.jpeg', descrizione: '' },
    { nome: 'Riccardo Signoretti', img: 'assets/ricky.jpeg', descrizione: '' },
    { nome: 'Matteo Caroli', img: 'assets/matteo.jpeg', descrizione: '' },
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
