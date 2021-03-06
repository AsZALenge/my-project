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
import { DormCreatedormitoryComponent } from './dorm-createdormitory/dorm-createdormitory.component';
import { DormDormitoryComponent } from './dorm-dormitory/dorm-dormitory.component';
import { DormManagedormComponent } from './dorm-managedorm/dorm-managedorm.component';
import { DormCreateconvenientComponent } from './dorm-createconvenient/dorm-createconvenient.component';
import { DormShowconvenComponent } from './dorm-showconven/dorm-showconven.component';
import { DormUpdateconvenComponent } from './dorm-updateconven/dorm-updateconven.component';


const routes: Routes = [
    { path: '', component: DormHomeComponent },
    { path: 'createDorm', component: DormCreatedormitoryComponent },
    { path: 'manageDorm', component: DormManagedormComponent },
    { path: 'mange', component: DormManageComponent },
    { path: 'detailDorm', component: DormDormitoryComponent },
    { path: 'updateRoom/:room_id', component: DormUpdateroomComponent },
    { path: 'selectRoomUpdate', component: DormSelectroomupdateComponent },
    { path: 'addRoom', component: DormAddroomComponent },
    { path: 'checkPayment', component: DormCheckpaymentComponent },
    { path: 'reCheckPayment/:mem_id', component: DormRecheckpaymentComponent },
    { path: 'profile', component: DormProfileComponent },
    { path: 'updateProfile', component: DormUpdateprofileComponent },
    { path: 'createCon', component: DormCreateconvenientComponent },
    { path: 'showCon', component: DormShowconvenComponent },
    { path: 'updateCon', component: DormUpdateconvenComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DormRoutingModule { }
