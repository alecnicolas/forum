import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCardComponent } from './post-card.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [PostCardComponent],
  exports: [PostCardComponent]
})
export class PostCardModule {}
