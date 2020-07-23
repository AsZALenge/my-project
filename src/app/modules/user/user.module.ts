import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserSearchDormComponent } from './user-search-dorm/user-search-dorm.component';
import { UserSearchDormShowallroomComponent } from './user-search-dorm-showallroom/user-search-dorm-showallroom.component';
import { UserReserinformationComponent } from './user-reserinformation/user-reserinformation.component';
import { UserUpdateProfileComponent } from './user-update-profile/user-update-profile.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserUploadPaymentComponent } from './user-upload-payment/user-upload-payment.component';
import { UserSearchDormShowroomComponent } from './user-search-dorm-showroom/user-search-dorm-showroom.component';

@NgModule({
  declarations: [UserHomeComponent, UserProfileComponent, UserSearchComponent, UserSearchDormComponent, UserSearchDormShowallroomComponent, UserReserinformationComponent, UserUpdateProfileComponent, UserPaymentComponent, UserUploadPaymentComponent, UserSearchDormShowroomComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
