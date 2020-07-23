import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserSearchDormComponent } from './user-search-dorm/user-search-dorm.component';
import { UserSearchDormShowallroomComponent } from './user-search-dorm-showallroom/user-search-dorm-showallroom.component';
import { UserReserinformationComponent } from './user-reserinformation/user-reserinformation.component';
import { UserUpdateProfileComponent } from './user-update-profile/user-update-profile.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserUploadPaymentComponent } from './user-upload-payment/user-upload-payment.component';
import { UserSearchDormShowroomComponent } from './user-search-dorm-showroom/user-search-dorm-showroom.component';

const routes: Routes = [
    { path: '', component: UserHomeComponent },
    { path: 'search', component: UserSearchComponent },
    { path: 'searchDorm', component: UserSearchDormComponent },
    { path: 'showAllRoom', component: UserSearchDormShowallroomComponent },
    { path: 'showRoom', component: UserSearchDormShowroomComponent },
    { path: 'reserInformation', component: UserReserinformationComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'updateProfile', component: UserUpdateProfileComponent },
    { path: 'payment', component: UserPaymentComponent },
    { path: 'uploadPayment', component: UserUploadPaymentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserRoutingModule { }
