import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserUpdateprofileComponent } from './user-updateprofile/user-updateprofile.component';
import { UserShowdormComponent } from './user-showdorm/user-showdorm.component';
import { UserShowroomComponent } from './user-showroom/user-showroom.component';
import { UserSelectroomComponent } from './user-selectroom/user-selectroom.component';
import { UserUploadpaymentComponent } from './user-uploadpayment/user-uploadpayment.component';
import { UserReserinformationComponent } from './user-reserinformation/user-reserinformation.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserShowreserComponent } from './user-showreser/user-showreser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    UserShowreserComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class UserModule { }
