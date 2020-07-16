import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { HomeRegisterUserComponent } from './home-register-user/home-register-user.component';
import { HomeRegisterDormComponent } from './home-register-dorm/home-register-dorm.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: HomeLoginComponent },
    { path: 'register', component: HomeRegisterComponent },
    { path: 'regisUser', component: HomeRegisterUserComponent },
    { path: 'regisOwner', component: HomeRegisterDormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
