import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.component';
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

  public addProductForm: ProductModel;

  categories: Category[] = [
    { value: 'category-0', viewValue: 'Grocery' },
    { value: 'category-1', viewValue: 'Dairy' },
    { value: 'category-2', viewValue: 'Frozen' }
  ];
  service: any;
  ProductService: any;

  constructor(
    private dialogRef: MatDialogRef<ProductFormComponent>
  ) { }

  ngOnInit() {
    this.initialiseAddProductForm();
  }

  private initialiseAddProductForm() {
    this.addProductForm = {
      id: null,
      productID: null,
      image: null,
      name: null,
      description: null,
      price: null,
      weight: null,
      expiry_Date: null,
      barcode: null,
      brand: null,
      category: null,
      supplierID: null,
      modifiedBy: null,
      modifiedDate: null
    };
  }

  onClose() {
    this.service.form.close();
    this.service.initializeFormGroup();
  }

  addNew() {
    this.dialogRef.close(this.addProductForm);
  }

  // createProduct() {
    // this.ProductService.createProducts(this.product).subscribe((res) => {});
  // }
}
