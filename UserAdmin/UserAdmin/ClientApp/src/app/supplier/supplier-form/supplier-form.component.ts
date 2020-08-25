import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Supplier } from '../../supplier';
import { HttpClient } from '@angular/common/http';
import { SupplierService } from '../../shared/supplier.service';


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

  supplier: Supplier = {} as Supplier;


  public addSupplierForm: Supplier;
  service: any;
  constructor(
    private dialogRef: MatDialogRef<SupplierFormComponent>, public http: HttpClient,
    private apiService: SupplierService) { }

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
    console.log(this.supplier);
    this.apiService.createSuppliers(this.supplier).subscribe((res) => {
    });
    this.dialogRef.close();
    this.apiService.getSuppliers();
  }

 
}
