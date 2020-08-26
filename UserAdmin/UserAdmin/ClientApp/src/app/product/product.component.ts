import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProductFormComponent } from './product-form/product-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../shared/product.service';

export interface ProductModel {
  id?: string;
  productID?: number;
  image?: string;
  name?: string;
  description?: string;
  price?: string;
  weight?: string;
  expiry_Date?: Date;
  barcode?: number;
  brand?: string;
  category?: string;
  supplierID?: number;
  modifiedBy?: string;
  modifiedDate?: Date;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {


  constructor(public dialog: MatDialog,
  private productService: ProductService) {}

  displayedColumns: string[] = ['id', 'productID', 'image', 'name', 'description',
  'price', 'weight', 'expiry_Date', 'barcode', 'brand', 'category', 'supplierID',
  'modifiedBy', 'modifiedDate', 'actions'];

  dataSource = new MatTableDataSource<ProductModel>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getProductList();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe((result: ProductModel) => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getProductList() {
    this.productService
    .getProducts()
    .subscribe((data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.value);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  // createProduct() {
      // this.ProductService.createProducts(this.product).subscribe((res) => {});
  // }

}
