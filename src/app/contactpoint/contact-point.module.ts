import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPointComponent } from './contactpointapp/contact-point.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: ContactPointComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactPointComponent]
})
export class ContactPointModule { }
