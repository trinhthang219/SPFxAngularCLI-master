import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  { path: 'contactpoint', loadChildren: './contactpoint/contact-point.module#ContactPointModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true , useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
