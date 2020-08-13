import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
import { ProductComponent } from './product/product.component';
import { ListComponent } from './product/list/list.component';
import { MaterialModule } from './material/material.module';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    FetchDataComponent,
    ProductComponent,
    ListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'user', component: UsersComponent },
      { path: 'product', component: ProductComponent},
      { path: 'list', component: ListComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [UserComponent, MatConfirmDialogComponent]
})
export class AppModule { }
