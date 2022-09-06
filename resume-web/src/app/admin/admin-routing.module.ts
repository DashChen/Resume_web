import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layouts } from '../app.component';
import {
    AdminLoginComponent, AdminComponent,
    CompanyJobListComponent, HomeComponent, ResumeManagementComponent
} from './pages';
import { ForgetComponent } from './pages/forget/forget.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'login', component: AdminLoginComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'forget', component: ForgetComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'reset-password', component: ResetPasswordComponent, data: { layout: Layouts.adminLogin }, },

            { path: 'resume', component: HomeComponent, data: { layout: Layouts.adminMain }, },
            { path: 'message', component: HomeComponent, data: { layout: Layouts.adminMain }, },
            { path: 'company-job', component: CompanyJobListComponent, data: { layout: Layouts.adminMain }, },
            { path: 'member', component: HomeComponent, data: { layout: Layouts.adminMain }, },
            { path: 'resume-management', component: ResumeManagementComponent, data: { layout: Layouts.adminMain }, },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }