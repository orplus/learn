import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserService } from './shared/user.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ListComponent } from './product/list/list.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { ProductComponent } from './product/product.component';
import { EditFormComponent } from './product/edit-form/edit-form.component';
import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    UsersComponent,
    UserComponent,
    FetchDataComponent,
    ProductFormComponent,
    UserListComponent,
    ProductComponent,
    ListComponent,
    MatConfirmDialogComponent,
    EditFormComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent],
  entryComponents: [UserComponent, MatConfirmDialogComponent]
})
export class AppModule { }
