import { Component, OnInit } from '@angular/core';
import { ProductTable } from '../product.component';
import { MatDialogRef } from '@angular/material';


interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  selectedValue: string;

  public addProductForm: ProductTable;

  categories: Category[] = [
    { value: 'category-0', viewValue: 'Grocery' },
    { value: 'category-1', viewValue: 'Dairy' },
    { value: 'category-2', viewValue: 'Frozen' }
  ];
  service: any;
  constructor(
    private dialogRef: MatDialogRef<ProductFormComponent>
  ) { }

  ngOnInit() {
    this.initialiseAddProductForm();
  }

  private initialiseAddProductForm() {
    this.addProductForm = {
      productId: null,
      image: null,
      name: null,
      description: null,
      price: null,
      weight: null,
      expiryDate: null,
      barcode: null,
      brand: null,
      category: null,
      supplierId: null
    };
  }

  onClose() {
    this.service.form.close();
    this.service.initializeFormGroup();
  }

  addNew() {
    this.dialogRef.close(this.addProductForm);
  }
}
