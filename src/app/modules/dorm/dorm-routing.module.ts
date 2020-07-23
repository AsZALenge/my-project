import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DormHomeComponent } from './dorm-home/dorm-home.component';
import { DormManageComponent } from './dorm-manage/dorm-manage.component';
import { DormManageUpdateroomComponent } from './dorm-manage-updateroom/dorm-manage-updateroom.component';
import { DormManageSelectroomupdateComponent } from './dorm-manage-selectroomupdate/dorm-manage-selectroomupdate.component';
import { DormCheckpaymentComponent } from './dorm-checkpayment/dorm-checkpayment.component';
import { DormProfileComponent } from './dorm-profile/dorm-profile.component';
import { DormUpdateProfileComponent } from './dorm-update-profile/dorm-update-profile.component';


const routes: Routes = [
    { path: '', component: DormHomeComponent },
    { path: 'mange', component: DormManageComponent },
    { path: 'updateRoom', component: DormManageUpdateroomComponent },
    { path: 'selectRoomUpdate', component: DormManageSelectroomupdateComponent },
    { path: 'addRoom', component: DormManageUpdateroomComponent },
    { path: 'checkPayment', component: DormCheckpaymentComponent },
    { path: 'profile', component: DormProfileComponent },
    { path: 'updateProfile', component: DormUpdateProfileComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DormRoutingModule { }
