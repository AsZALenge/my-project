import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminManageroomComponent } from './admin-manageroom/admin-manageroom.component';
import { AdminShowdormComponent } from './admin-showdorm/admin-showdorm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [AdminHomeComponent, 
    AdminSearchComponent, 
    AdminManageComponent, 
    AdminManageroomComponent, AdminShowdormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
