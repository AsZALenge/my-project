import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserUpdateprofileComponent } from './user-updateprofile/user-updateprofile.component';
import { UserShowdormComponent } from './user-showdorm/user-showdorm.component';
import { UserShowroomComponent } from './user-showroom/user-showroom.component';
import { UserSelectroomComponent } from './user-selectroom/user-selectroom.component';
import { UserUploadpaymentComponent } from './user-uploadpayment/user-uploadpayment.component';
import { UserReserinformationComponent } from './user-reserinformation/user-reserinformation.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    UserPaymentComponent,
    UserProfileComponent,
    UserReserinformationComponent,
    UserSearchComponent,
    UserSelectroomComponent,
    UserShowdormComponent,
    UserShowroomComponent,
    UserUpdateprofileComponent,
    UserUploadpaymentComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
