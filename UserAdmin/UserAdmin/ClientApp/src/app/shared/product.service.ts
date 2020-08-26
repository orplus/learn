import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../product/product.component';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // constructor(private http: HttpClient) { }

  // url = 'https://localhost:44398/api/Products?api-version=1.0&%24count=true';

 //   getProducts() {
 //    return this.http.get<ProductTable[]>(this.url);
// }

constructor(private httpClient: HttpClient) {}
getProducts() {
  return this.httpClient.get('https://localhost:44398/api/Products?api-version=1.0&%24count=true').
      pipe(
         map((data: ProductModel[]) => {
           return data;
         }), catchError( error => {
           return throwError( 'Something went wrong!' );
         })
      );
  }
  createProducts(product: ProductModel[]) {
    return this.httpClient.post('https://localhost:44398/api/Products?api-version=1.0&%24count=true', product).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        );
    }
}
