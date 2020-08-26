import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ListComponent } from './product/list/list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditFormComponent } from './product/edit-form/edit-form.component';
import { ProductService } from './shared/product.service';



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productForm', component: ProductFormComponent },
  { path: 'list', component: ListComponent },
  { path: 'editForm', component: EditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [ProductComponent]
})
export class AppRoutingModule { }
