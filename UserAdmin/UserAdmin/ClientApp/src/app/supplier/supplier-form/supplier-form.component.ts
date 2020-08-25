import { Component, OnInit } from '@angular/core';
import { SupplierTable } from '../supplier.component';
import { MatDialogRef } from '@angular/material';


interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  selectedValue: string;

  public addSupplierForm: SupplierTable;
  service: any;
  constructor(
    private dialogRef: MatDialogRef<SupplierFormComponent>
  ) { }

  ngOnInit() {
    this.initialiseAddSupplierForm();
  }

  private initialiseAddSupplierForm() {
    this.addSupplierForm = {
      id: null,
      supplierID: null,
      name: null,
      location: null,
      telephone: null,
      link: null,
      workAddress: null,
      city: null,
      street: null,
      state: null,
      zip: null
    };
  }

  onClose() {
    this.service.form.close();
    this.service.initializeFormGroup();
  }

  addNew() {
    this.dialogRef.close(this.addSupplierForm);
  }
}
