import { Component, OnInit } from '@angular/core';

export interface ProductTable {
  position: number;
  productId: number;
  name: string;
  /*brand: string;
  description: string;
  image: string;
  price: number;
  supplierId: number;
  link: string;
  category: string;
  barcode: number;
  weight: number;
  expiryDate: number;
  */
}

const ELEMENT_DATA: ProductTable[] = [
  {position: 1, productId: 10, name: 'Cheese'},
  {position: 2, productId: 20, name: 'Cheese'},
  {position: 3, productId: 30, name: 'Cheese'},
  {position: 4, productId: 40, name: 'Cheese'},
  {position: 5, productId: 50, name: 'Cheese'},
  {position: 6, productId: 60, name: 'Cheese'},
  {position: 7, productId: 70, name: 'Cheese'},
  {position: 8, productId: 80, name: 'Cheese'},
  {position: 9, productId: 90, name: 'Cheese'},
  {position: 10, productId: 100, name: 'Cheese'}
];
/*const ELEMENT_DATA: ProductTable[] = [
  {position: 1, productId: 000001, name: 'Cheese', brand: 'Kraft',
  description: 'aabb', image: 'cheese.jpg', price: 64.93,
  supplierId: 01000, link: 'winners.mu', category: 'dairy', barcode: 111222333,
  weight: 250, expiryDate: 04/08/2020},
  {position: 2, productId: 000001, name: 'Cheese', brand:
  'Kraft', description: 'aabb', image: 'cheese.jpg', price: 64.93,
   supplierId: 01000, link: 'winners.mu', category: 'dairy', barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 3, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu', category: 'dairy', barcode: 111222333,
    weight: 250, expiryDate: 04/08/2020},
  {position: 4, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu',
    category: 'dairy', barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 5, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu',
    category: 'dairy', barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 6, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu',
    category: 'dairy', barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 7, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu', category: 'dairy',
    barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 8, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu', category: 'dairy',
    barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 9, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu', category: 'dairy',
    barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
  {position: 10, productId: 000001, name: 'Cheese', brand: 'Kraft', description: 'aabb',
   image: 'cheese.jpg', price: 64.93, supplierId: 01000, link: 'winners.mu', category: 'dairy',
    barcode: 111222333, weight: 250, expiryDate: 04/08/2020},
];
*/
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  /* displayedColumns: string[] = ['position', 'productId', 'name',
  'brand', 'description', 'image', 'price', 'supplierId', 'link',
  'category', 'barcode', 'weight', 'expiryDate'];
  */
  displayedColumns: string[] = ['position', 'productId', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
