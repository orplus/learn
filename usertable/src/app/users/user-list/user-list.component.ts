import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    displayedColumns = ['id', 'fullname', 'email', 'city', 'gender', 'department', 'hireDate', 'actions'];
    dataSource = USER_DATA;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
  }

export interface Element {
    fullname: string;
    id: number;
    email: string;
    city: string;
    gender: string;
    department: string;
    hireDate: string;
  }

const USER_DATA: Element[] = [
    {id: 1, fullname: 'Yashinee', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 2, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 3, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 4, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 5, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 6, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 7, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 8, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 9, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''},
    {id: 10, fullname: '', email: '', city: '', gender: '', department: '', hireDate: ''}
  ];
