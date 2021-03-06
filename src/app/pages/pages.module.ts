import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module'

import { SharedModule } from '../components/shared.module';
import { ImagesComponent } from './images/images.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ ImagesComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
