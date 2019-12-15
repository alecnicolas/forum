import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule]
})
export class MaterialModule {}
