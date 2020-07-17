import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DormHomeComponent } from './dorm-home/dorm-home.component';
// import { AdminHomeComponent } from './admin-home/admin-home.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { HomeLoginComponent } from './home-login/home-login.component';
// import { HomeRegisterComponent } from './home-register/home-register.component';

const routes: Routes = [
    { path: '', component: DormHomeComponent },
    // { path: 'login', component: HomeLoginComponent },
    // { path: 'register', component: HomeRegisterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DormRoutingModule { }
