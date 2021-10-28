import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
    {
        path: '', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
        redirectTo: 'home-page',
        pathMatch: 'full'
    },
     {
        path: 'home-page', // correspond à http://localhost:4200/home-page
        component: ImagesComponent
    },
    {
        path: 'contact', // correspond à http://localhost:4200/login
        component: ContactComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
