import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeRegisteruserComponent } from './home-registeruser/home-registeruser.component';
import { HomeRegisterdormComponent } from './home-registerdorm/home-registerdorm.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeShowroomComponent } from './home-showroom/home-showroom.component';
import { HomeMemberComponent } from './home-member/home-member.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    HomeRegisteruserComponent,
    HomeRegisterdormComponent,
    HomeShowroomComponent,
    HomeMemberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class HomeModule { }
