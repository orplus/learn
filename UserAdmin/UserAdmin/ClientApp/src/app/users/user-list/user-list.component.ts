import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
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
export class UserListComponent {


    displayedColumns = ['id', 'firstname', 'lastname', 'city', 'gender', 'email', 'lastConnected', 'actions'];
    dataSource = USER_DATA;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    searchKey: string;

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
     ////// if (confirm('Are you sure to delete this record?')) {
      ///  this.service.deleteEmployee($key);
     //// }

     this.dialogService.openConfirmDialog();
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
    email: string;
    lastConnected: string;
  }

const USER_DATA: Element[] = [
    {id: 1, firstname: 'Yashinee', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 2, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 3, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 4, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 5, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 6, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 7, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 8, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 9, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''},
    {id: 10, firstname: '', lastname: '', city: '', gender: '', email: '', lastConnected: ''}
  ];

