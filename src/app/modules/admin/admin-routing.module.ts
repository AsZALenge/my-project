import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';


const routes: Routes = [
    { path: '', component: AdminHomeComponent },
    { path: 'search', component: AdminSearchComponent },
    { path: 'manage', component: AdminManageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
