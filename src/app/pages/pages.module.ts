import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../components/shared.module';
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ ImagesComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
