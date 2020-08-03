import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { HomeRegisteruserComponent } from './home-registeruser/home-registeruser.component';
import { HomeRegisterdormComponent } from './home-registerdorm/home-registerdorm.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: HomeLoginComponent },
    { path: 'register', component: HomeRegisterComponent },
    { path: 'regisUser', component: HomeRegisteruserComponent },
    { path: 'regisDorm', component: HomeRegisterdormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
