import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {PaymentComponent} from './payment/payment.component';



const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingProfileModule { }
