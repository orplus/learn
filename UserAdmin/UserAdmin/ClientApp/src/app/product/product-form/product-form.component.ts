import { Component, OnInit } from '@angular/core';


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

  categories: Category[] = [
    {value: 'category-0', viewValue: 'Grocery'},
    {value: 'category-1', viewValue: 'Dairy'},
    {value: 'category-2', viewValue: 'Frozen'}
  ];
  service: any;
  ELEMENT_DATA: any;
  constructor() { }

  ngOnInit() {
  }

  // onClear() {
  //   this.service.form.reset();
  //   this.service.initializeFormGroup();
  // }
  onClose() {
     this.service.form.close();
     this.service.initializeFormGroup();
  }

  addNew() {
    this.ELEMENT_DATA.push(this.ELEMENT_DATA.length + 1);
    console.log(this.ELEMENT_DATA);
  }
}
