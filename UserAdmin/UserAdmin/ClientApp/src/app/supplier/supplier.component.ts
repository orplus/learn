import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HttpClient } from '@angular/common/http';
import { SupplierService } from '../shared/supplier.service';
import { Supplier } from '../supplier';

export interface SupplierTable {
  id: string;
  supplierID: number;
  name: string;
  location: string;
  telephone: number;
  link: string;
  workAddress: string;
  city: number;
  street: string;
  state: string;
  zip: number;
}

/*const ELEMENT_DATA: SupplierTable[] = [
  {
    id: 'sfcws', supplierID: 1, name: 'Cheese',
    location: 'aabb', telephone: 11 , link: '250g', workAddress: 'cgbcfgf',
    city: 111222333, street: 'Kraft', state: 'Dairy', zip: 20000
  },
  {
    id: 'sfcws', supplierID: 2, name: 'Butter',
    location: 'bbcc', telephone: 23423 , link: '250g', workAddress: 'dswvewdv',
    city: 111222333, street: 'Flora', state: 'Frozen', zip: 30000
  },
  {
    id: 'sfcws', supplierID: 3, name: 'Cookies',
    location: 'ccdd', telephone: 34645, link: '266g', workAddress: 'cwdcdas',
    city: 111222333, street: 'Oreo', state: 'Grocery', zip: 40000
  },
  {
    id: 'sfcws', supplierID: 4, name: 'Meat',
    location: 'eeff', telephone: 543, link: '500g', workAddress: 'wdvefdv',
    city: 111222333, street: 'Winners', state: 'Frozen', zip: 50000
  },
  {
    id: 'sfcws', supplierID: 5, name: 'Milk',
    location: 'ggghhh', telephone: 234, link: '1l', workAddress: 'wdvfedvfve',
    city: 111222333, street: 'Candia', state: 'dairy', zip: 20000
  },
  {
    id: 'sfcws', supplierID: 6, name: 'Salt',
    location: 'random', telephone: 5436, link: '500g', workAddress: 'dwvewdvedv',
    city: 111222333, street: 'Dolly', state: 'Grocery', zip: 60000
  },
  {
    id: 'sfcws', supplierID: 7, name: 'Sausage',
    location: 'random1', telephone: 435, link: '340g', workAddress: 'dvcedfv',
    city: 111222333, street: 'Doux', state: 'Frozen', zip: 70000
  },
  {
    id: 'sfcws', supplierID: 8, name: 'Sugar',
    location: 'random3', telephone: 435, link: '2kg', workAddress: 'dwvfedv',
    city: 111222333, street: 'Winners', state: 'Grocery', zip: 60000
  },
  {
    id: 'sfcws', supplierID: 9, name: 'Water',
    location: 'random4', telephone: 324 , link: '1.5l', workAddress: 'efvfe',
    city: 111222333, street: 'Crystal', state: 'Beverage', zip: 80000
  },
  {
    id: 'sfcws', supplierID: 10, name: 'Wine',
    location: 'random5', telephone: 346 , link: '750ml', workAddress: 'dvdsv',
    city: 111222333, street: 'Rendez Vous', state: 'Beverage', zip: 80000
  },
];*/

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  constructor(public dialog: MatDialog,
     private apiService: SupplierService ) { }

  supplier :  Supplier[];
  ELEMENT_DATA: Supplier[];
  displayedColumns = ['id', 'supplierID', 'name', 'location',
    'telephone', 'link', 'workAddress', 'city', 'street', 'state', 'zip'];

 dataSource = new MatTableDataSource<Supplier>(this.ELEMENT_DATA);


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
   
    
    
    //this.getSuppliers().then((data) => { console.log(data) });
    this.getSuppliersList();
    //this.getSuppliers();
  }


  /*removeRow(row: any): void {
    console.log(row);
    ELEMENT_DATA.forEach((element, index) => {
      if (element.supplierID === row.supplierID) {
        ELEMENT_DATA.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(SupplierFormComponent);

    dialogRef.afterClosed().subscribe((result: SupplierTable) => {
      ELEMENT_DATA.push(result);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }*/

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /*public async getSuppliers() {
    return await this.httpClient.get(`https://localhost:44398/api/Supplier?&api-version=1.0&%24count=true`).toPromise();
  }*/

  getSuppliersList() {
    this.apiService
      .getSuppliers()
      .subscribe((data: any) => {
        console.log(data);
        //this.supplier = data.data;
        this.dataSource = new MatTableDataSource(data.value);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
   
  }
  
  /*public getSuppliers() {
    /*let resp = this.apiService.suppliersList();
    resp.subscribe(sup => {
      if (!sup) {
        return;
      }
      this.dataSource.data = sup as Supplier[]
    });

    this.apiService.suppliersList().
      subscribe(result => {
        if (!result) {
          return;
        }
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
       // this.dataSource.data = result as Supplier[];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }*/
}
