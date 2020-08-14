import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepicker,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule
} from '@angular/material';


const MaterialComponents = [
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
