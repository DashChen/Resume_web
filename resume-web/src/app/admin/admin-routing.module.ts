import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layouts } from '../app.component';
import { AdminLoginComponent, AboutComponent, AdminComponent, HomeComponent } from './pages';
import { ForgetComponent } from './pages/forget/forget.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        data: { layout: Layouts.userMain },
        children: [
            { path: 'login', component: AdminLoginComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'forget', component: ForgetComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'about', component: AboutComponent, data: { layout: Layouts.userMain }, },
            { path: 'home', component: HomeComponent, data: { layout: Layouts.userMain }, },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }