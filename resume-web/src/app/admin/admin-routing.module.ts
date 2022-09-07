import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layouts } from '../app.component';
import {
    AdminLoginComponent,
    AdminComponent,
    CompanyJobListComponent,
    ForgetComponent,
    HomeComponent,
    ResetPasswordComponent,
    ResumeManagementComponent,
    ResumeInvitationListComponent,
    ResumeInvitationsComponent,
} from './pages';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'login', component: AdminLoginComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'forget', component: ForgetComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'reset-password', component: ResetPasswordComponent, data: { layout: Layouts.adminLogin }, },

            { path: 'message', component: ResumeInvitationListComponent, data: { layout: Layouts.adminMain }, },
            // { path: 'resume-invitation', component: ResumeInvitationsComponent, data: { layout: Layouts.adminMain }, },
            // { path: 'message', component: HomeComponent, data: { layout: Layouts.adminMain }, },
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