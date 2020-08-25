import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Supplier } from "../supplier";


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }
  /*InsertEmployee(supplier: Supplier) {
    debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Supplier[]>(this.Url + '/InsertSupplier/', supplier, httpOptions)
  }
  GetSupplier(): Observable<Supplier[]> {
    debugger;
    return this.http.get<Supplier[]>(this.Url)
  }*/

  getSuppliers() {
    return this.httpClient.get(`https://localhost:44398/api/Supplier?&api-version=1.0&%24count=true`).
      pipe(
        map((data: Supplier[]) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }

 /*public suppliersList() {
    return this.http.get("https://localhost:44398/api/Supplier?&api-version=1.0&%24count=true")
  }*/
}
