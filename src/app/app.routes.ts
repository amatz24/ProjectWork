import { Routes } from '@angular/router';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BurgersComponent } from './components/burgers/burgers.component';

export const routes: Routes = [
    { path: "drinks", component: DrinksComponent },
    { path: 'burg', component: BurgersComponent }

];
