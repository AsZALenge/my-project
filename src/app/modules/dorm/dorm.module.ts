import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DormHomeComponent } from './dorm-home/dorm-home.component';
import { DormRoutingModule } from './dorm-routing.module';
import { DormManageComponent } from './dorm-manage/dorm-manage.component';
import { DormCheckpaymentComponent } from './dorm-checkpayment/dorm-checkpayment.component';
import { DormProfileComponent } from './dorm-profile/dorm-profile.component';
import { DormUpdateroomComponent } from './dorm-updateroom/dorm-updateroom.component';
import { DormSelectroomupdateComponent } from './dorm-selectroomupdate/dorm-selectroomupdate.component';
import { DormAddroomComponent } from './dorm-addroom/dorm-addroom.component';
import { DormUpdateprofileComponent } from './dorm-updateprofile/dorm-updateprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DormRecheckpaymentComponent } from './dorm-recheckpayment/dorm-recheckpayment.component';
import { DormCreatedormitoryComponent } from './dorm-createdormitory/dorm-createdormitory.component';
import { DormDormitoryComponent } from './dorm-dormitory/dorm-dormitory.component';
import { DormManagedormComponent } from './dorm-managedorm/dorm-managedorm.component';
import { DormCreateconvenientComponent } from './dorm-createconvenient/dorm-createconvenient.component';
import { DormShowconvenComponent } from './dorm-showconven/dorm-showconven.component';
import { DormUpdateconvenComponent } from './dorm-updateconven/dorm-updateconven.component';

@NgModule({
  declarations: [DormHomeComponent,
    DormManageComponent,
    DormCheckpaymentComponent,
    DormProfileComponent,
    DormSelectroomupdateComponent,
    DormAddroomComponent,
    DormUpdateprofileComponent,
    DormUpdateroomComponent,
    DormRecheckpaymentComponent,
    DormCreatedormitoryComponent,
    DormDormitoryComponent,
    DormManagedormComponent,
    DormCreateconvenientComponent,
    DormShowconvenComponent,
    DormUpdateconvenComponent,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    DormRoutingModule
  ]
})
export class DormModule { }
