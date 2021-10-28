import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagesSingleComponent } from './images-single/images-single.component';
 
@NgModule({
  declarations: [
    
    ImagesSingleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ImagesSingleComponent
  ]
})
export class SharedModule {
}
