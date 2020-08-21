import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProductFormComponent } from './product-form/product-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClient } from '@angular/common/http';

export interface ProductTable {
  productId?: number;
  image: string;
  name: string;
  description: string;
  price: string;
  weight: string;
  expiryDate: Date;
  barcode: number;
  brand: string;
  category: string;
  supplierId: number;
}

const ELEMENT_DATA: ProductTable[] = [
  {
    productId: 1, image: '../assets/images/cheese.svg', name: 'Cheese',
    description: 'aabb', price: 'Rs 64.93', weight: '250g', expiryDate: new Date(4 / 8 / 2020),
    barcode: 111222333, brand: 'Kraft', category: 'Dairy', supplierId: 20000
  },
  {
    productId: 2, image: '../assets/images/butter.svg', name: 'Butter',
    description: 'bbcc', price: 'Rs 54.95', weight: '250g', expiryDate: new Date(5 / 8 / 2020),
    barcode: 111222333, brand: 'Flora', category: 'Frozen', supplierId: 30000
  },
  {
    productId: 3, image: '../assets/images/cookies.svg', name: 'Cookies',
    description: 'ccdd', price: 'Rs 19.95', weight: '266g', expiryDate: new Date(6 / 8 / 2020),
    barcode: 111222333, brand: 'Oreo', category: 'Grocery', supplierId: 40000
  },
  {
    productId: 4, image: '../assets/images/meat.svg', name: 'Meat',
    description: 'eeff', price: 'Rs 109.93', weight: '500g', expiryDate: new Date(7 / 8 / 2020),
    barcode: 111222333, brand: 'Winners', category: 'Frozen', supplierId: 50000
  },
  {
    productId: 5, image: '../assets/images/milk.svg', name: 'Milk',
    description: 'ggghhh', price: 'Rs 38.95', weight: '1l', expiryDate: new Date(8 / 8 / 2020),
    barcode: 111222333, brand: 'Candia', category: 'dairy', supplierId: 20000
  },
  {
    productId: 6, image: '../assets/images/salt.svg', name: 'Salt',
    description: 'random', price: 'Rs 10.95', weight: '500g', expiryDate: new Date(9 / 8 / 2020),
    barcode: 111222333, brand: 'Dolly', category: 'Grocery', supplierId: 60000
  },
  {
    productId: 7, image: '../assets/images/sausage.svg', name: 'Sausage',
    description: 'random1', price: 'Rs 30.00', weight: '340g', expiryDate: new Date(10 / 8 / 2020),
    barcode: 111222333, brand: 'Doux', category: 'Frozen', supplierId: 70000
  },
  {
    productId: 8, image: '../assets/images/sugar.svg', name: 'Sugar',
    description: 'random3', price: 'Rs 67.95', weight: '2kg', expiryDate: new Date(21 / 7 / 2020),
    barcode: 111222333, brand: 'Winners', category: 'Grocery', supplierId: 60000
  },
  {
    productId: 9, image: '../assets/images/water.svg', name: 'Water',
    description: 'random4', price: 'Rs 17.50', weight: '1.5l', expiryDate: new Date(22 / 7 / 2020),
    barcode: 111222333, brand: 'Crystal', category: 'Beverage', supplierId: 80000
  },
  {
    productId: 10, image: '../assets/images/wine.svg',  name: 'Wine',
    description: 'random5', price: 'Rs 90.00', weight: '750ml', expiryDate: new Date(23 / 7 / 2020),
    barcode: 111222333, brand: 'Rendez Vous', category: 'Beverage', supplierId: 80000
  },
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(public dialog: MatDialog,
  private httpClient: HttpClient)
  { }

  displayedColumns: string[] = ['productId', 'image', 'name', 'description',
  'price', 'weight', 'expiryDate', 'barcode', 'brand', 'category', 'supplierId',
  'edit', 'archive', 'delete'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getProducts().then((data) => { console.log(data) });
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

  openCreateDialog() {
    const dialogRef = this.dialog.open(ProductFormComponent);

    dialogRef.afterClosed().subscribe((result: ProductTable) => {
      ELEMENT_DATA.push(result);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
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

  public async getProducts() {
    return await this.httpClient.get(`https://localhost:44398/api/Products?&api-version=1.0&%24count=true`).toPromise();
  }
}
