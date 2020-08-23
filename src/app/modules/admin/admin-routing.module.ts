import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminManageroomComponent } from './admin-manageroom/admin-manageroom.component';
import { AdminShowdormComponent } from './admin-showdorm/admin-showdorm.component';


const routes: Routes = [
    { path: '', component: AdminHomeComponent },
    { path: 'search', component: AdminSearchComponent },
    { path: 'manage', component: AdminManageComponent },
    { path: 'manageRoom/:dorm_id', component: AdminManageroomComponent },
    { path: 'showDorm', component: AdminShowdormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
