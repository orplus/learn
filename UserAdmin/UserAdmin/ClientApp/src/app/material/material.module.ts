import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatTableModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
