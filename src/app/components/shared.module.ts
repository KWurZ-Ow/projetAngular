import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagesSingleComponent } from './images-single/images-single.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CharLimitPipe } from '../pipes/char-limit.pipe';



 
@NgModule({
  declarations: [
    ImagesSingleComponent,
    CharLimitPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ImagesSingleComponent,
    CharLimitPipe
  ]
})
export class SharedModule {
}
