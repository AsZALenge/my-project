import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserReserinformationComponent } from './user-reserinformation/user-reserinformation.component';
import { UserSelectroomComponent } from './user-selectroom/user-selectroom.component';
import { UserShowdormComponent } from './user-showdorm/user-showdorm.component';
import { UserShowroomComponent } from './user-showroom/user-showroom.component';
import { UserUpdateprofileComponent } from './user-updateprofile/user-updateprofile.component';
import { UserUploadpaymentComponent } from './user-uploadpayment/user-uploadpayment.component';

const routes: Routes = [
    { path: '', component: UserHomeComponent },
    { path: 'payment', component: UserPaymentComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'reserInformation', component: UserReserinformationComponent },
    { path: 'search', component: UserSearchComponent },
    { path: 'selectRoom/:room_id', component: UserSelectroomComponent },
    { path: 'showDorm', component: UserShowdormComponent },
    { path: 'showRoom', component: UserShowroomComponent },
    { path: 'updateProfile', component: UserUpdateprofileComponent },
    { path: 'uploadPayment', component: UserUploadpaymentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserRoutingModule { }
