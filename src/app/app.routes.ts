import { Routes } from '@angular/router';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { HomeComponent } from './components/home/home.component';
import { DessertComponent } from './components/dessert/dessert.component';
import { SidedishComponent } from './components/sidedish/sidedish.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "drinks", component: DrinksComponent },
    { path: 'burg', component: BurgersComponent },
    { path: 'dessert', component: DessertComponent },
    { path: 'Side', component: SidedishComponent }
];
