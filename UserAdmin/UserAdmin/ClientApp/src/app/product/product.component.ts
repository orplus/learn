import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProductFormComponent } from './product-form/product-form.component';

export interface ProductTable {
  productId: number;
  image: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  expiryDate: Date;
  barcode: number;
  brand: string;
  category: string;
  supplierId: number;
}

const ELEMENT_DATA: ProductTable[] = [
  {
    productId: 1, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 2, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 3, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 4, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 5, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 6, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 7, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 8, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 9, image: 'cheese.svg', name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
  {
    productId: 10,image: 'cheese.svg',  name: 'Cheese', description: 'aabb',
    price: 64.93, weight: 250, expiryDate: new Date(4 / 8 / 2020), barcode: 111222333,
    brand: 'Kraft', category: 'dairy', supplierId: 20000
  },
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  displayedColumns: string[] = ['productId', 'image', 'name', 'description',
  'price', 'weight', 'expiryDate', 'barcode', 'brand', 'category', 'supplierId',
  'edit', 'archive', 'delete'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  removeRow(row: any): void {
    console.log(row);
    ELEMENT_DATA.forEach((element, index) => {
      if (element.productId === row.productId) {
        ELEMENT_DATA.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
