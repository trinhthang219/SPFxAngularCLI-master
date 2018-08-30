import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerParentComponent } from './customer-parent/customer-parent.component';
import { CustomerChildComponent } from './customer-child/customer-child.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: CustomerParentComponent },
  { path: 'customerchild', component: CustomerChildComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerParentComponent, CustomerChildComponent]
})
export class CustomerModule { }
