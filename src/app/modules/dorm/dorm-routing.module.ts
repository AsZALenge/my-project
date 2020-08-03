import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DormHomeComponent } from './dorm-home/dorm-home.component';
import { DormManageComponent } from './dorm-manage/dorm-manage.component';
import { DormCheckpaymentComponent } from './dorm-checkpayment/dorm-checkpayment.component';
import { DormProfileComponent } from './dorm-profile/dorm-profile.component';
import { DormUpdateprofileComponent } from './dorm-updateprofile/dorm-updateprofile.component';
import { DormUpdateroomComponent } from './dorm-updateroom/dorm-updateroom.component';
import { DormSelectroomupdateComponent } from './dorm-selectroomupdate/dorm-selectroomupdate.component';
import { DormAddroomComponent } from './dorm-addroom/dorm-addroom.component';
import { DormRecheckpaymentComponent } from './dorm-recheckpayment/dorm-recheckpayment.component';


const routes: Routes = [
    { path: '', component: DormHomeComponent },
    { path: 'mange', component: DormManageComponent },
    { path: 'updateRoom/:room_id', component: DormUpdateroomComponent },
    { path: 'selectRoomUpdate', component: DormSelectroomupdateComponent },
    { path: 'addRoom', component: DormAddroomComponent },
    { path: 'checkPayment', component: DormCheckpaymentComponent },
    { path: 'reCheckPayment', component: DormRecheckpaymentComponent },
    { path: 'profile', component: DormProfileComponent },
    { path: 'updateProfile/:dorm_id', component: DormUpdateprofileComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DormRoutingModule { }
