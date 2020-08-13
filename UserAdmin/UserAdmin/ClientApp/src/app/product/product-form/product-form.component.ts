import { Component, OnInit } from '@angular/core';


interface Link {
  value: string;
  viewValue: string;
}
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

  links: Link[] = [
    {value: 'link-0', viewValue: 'winners.mu'},
    {value: 'link-1', viewValue: 'dreamPrice.mu'},
    {value: 'link-2', viewValue: 'priceGuru.mu'}
  ];
  categories: Category[] = [
    {value: 'category-0', viewValue: 'Grocery'},
    {value: 'category-1', viewValue: 'Dairy'},
    {value: 'category-2', viewValue: 'Frozen'}
  ];
  service: any;
  constructor() { }

  ngOnInit() {
  }

  // onClear() {
  //   this.service.form.reset();
  //   this.service.initializeFormGroup();
  // }
  // onClose() {
  //   this.service.form.close();
  //   this.service.initializeFormGroup();
  // }
}
