import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialogModule, MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../shared/user.service';
import { DialogService } from 'src/app/shared/dialog.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


    displayedColumns = ['id', 'firstname', 'lastname', 'city', 'gender', 'mobile', 'lastConnected', 'actions'];
    dataSource = new MatTableDataSource<Element>(USER_DATA);
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    searchKey: string;

    @ViewChild(MatTable, {static: true}) table: MatTable<any>;

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }


    constructor(
      public dialog: MatDialog,
      public service: UserService,
      public dialogService: DialogService) {}

    openDialog(): void {
      this.service.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '60%';
      this.dialog.open(UserComponent, dialogConfig);
    }


    onEdit(row) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '60%';
      this.dialog.open(UserComponent, dialogConfig);
    }

    onDelete($key) {
     this.dialogService.openConfirmDialog();

     USER_DATA.forEach((element, index) => {
      if (element.id === $key.id) {
        USER_DATA.splice(index, 1);
      }
    });
    this.dataSource = new MatTableDataSource(USER_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    }

    onSearchClear() {
      this.searchKey = '';
    }
  }

export interface Element {
    firstname: string;
    id: number;
    lastname: string;
    city: string;
    gender: string;
    mobile: number;
    lastConnected: string;
  }

const USER_DATA: Element[] = [
    {id: 1, firstname: 'yashinee', lastname: 'Parianen', city: 'test', gender: 'Female', mobile: 56785765, lastConnected: ''},
    {id: 2, firstname: 'lena', lastname: 'will', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''},
    {id: 3, firstname: 'julie', lastname: 'william', city: 'test', gender: 'test', mobile: 57895346 , lastConnected: ''},
    {id: 4, firstname: 'tom', lastname: 'smith', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''},
    {id: 5, firstname: 'john', lastname: 'tim', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''},
    {id: 6, firstname: 'becky', lastname: 'win', city: 'test', gender: 'test', mobile: 57895346 , lastConnected: ''},
    {id: 7, firstname: 'lea', lastname: 'mil', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''},
    {id: 8, firstname: 'nina', lastname: 'tea', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''},
    {id: 9, firstname: 'emily', lastname: 'coffee', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''},
    {id: 10, firstname: 'bob', lastname: 'len', city: 'test', gender: 'test', mobile: 57895346, lastConnected: ''}
  ];

