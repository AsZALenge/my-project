import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DormHomeComponent } from './dorm-home/dorm-home.component';
import { DormRoutingModule } from './dorm-routing.module';

@NgModule({
  declarations: [DormHomeComponent],
  imports: [
    CommonModule,
    DormRoutingModule
  ]
})
export class DormModule { }
