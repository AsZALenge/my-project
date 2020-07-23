import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';



@NgModule({
  declarations: [AdminHomeComponent, AdminSearchComponent, AdminManageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
