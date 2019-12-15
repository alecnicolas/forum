import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatToolbarModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatToolbarModule]
})
export class MaterialModule {}
