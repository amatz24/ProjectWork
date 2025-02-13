import { Routes } from '@angular/router';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { HomeComponent } from './components/home/home.component';
import { DessertComponent } from './components/dessert/dessert.component';
import { CartComponent } from './components/cart/cart.component';
import { SidedishComponent } from './components/sidedish/sidedish.component';
import { AboutComponent } from './components/about/about.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderUndoComponent } from './components/order-undo/order-undo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "drinks", component: DrinksComponent },
    { path: 'burg', component: BurgersComponent },
    { path: 'dessert', component: DessertComponent },
    {path:'cart',component: CartComponent},
    { path: 'Side', component: SidedishComponent },
    { path: 'about', component: AboutComponent},
    { path: 'success', component: OrderSuccessComponent},
    { path: 'undo', component: OrderUndoComponent},
    { path: '**', component: NotfoundComponent}
    

];
