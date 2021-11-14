import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagesSingleComponent } from './images-single/images-single.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CharLimitPipe } from '../pipes/char-limit.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavComponent } from './nav/nav.component';

 
@NgModule({
  declarations: [
    ImagesSingleComponent,
    ImageViewerComponent,
    NavComponent,
    CharLimitPipe,
    NavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    ImagesSingleComponent,
    ImageViewerComponent,
    NavComponent,
    CharLimitPipe
  ]
})
export class SharedModule {
}
