import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeRegisterUserComponent } from './home-register-user/home-register-user.component';
import { HomeRegisterDormComponent } from './home-register-dorm/home-register-dorm.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    HomeRegisterUserComponent,
    HomeRegisterDormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
