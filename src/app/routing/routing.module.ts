import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { MainPageComponent } from '../main-page/main-page.component';
import { TransactionAddComponent } from '../transaction-add/transaction-add.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  },
  {
    path: 'transactions/add',
    component: TransactionAddComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }