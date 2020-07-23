import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DormHomeComponent } from './dorm-home/dorm-home.component';
import { DormRoutingModule } from './dorm-routing.module';
import { DormManageComponent } from './dorm-manage/dorm-manage.component';
import { DormManageUpdateroomComponent } from './dorm-manage-updateroom/dorm-manage-updateroom.component';
import { DormManageAddroomComponent } from './dorm-manage-addroom/dorm-manage-addroom.component';
import { DormCheckpaymentComponent } from './dorm-checkpayment/dorm-checkpayment.component';
import { DormProfileComponent } from './dorm-profile/dorm-profile.component';
import { DormUpdateProfileComponent } from './dorm-update-profile/dorm-update-profile.component';
import { DormManageSelectroomupdateComponent } from './dorm-manage-selectroomupdate/dorm-manage-selectroomupdate.component';

@NgModule({
  declarations: [DormHomeComponent, DormManageComponent, DormManageUpdateroomComponent, DormManageAddroomComponent, DormCheckpaymentComponent, DormProfileComponent, DormUpdateProfileComponent, DormManageSelectroomupdateComponent],
  imports: [
    CommonModule,
    DormRoutingModule
  ]
})
export class DormModule { }
