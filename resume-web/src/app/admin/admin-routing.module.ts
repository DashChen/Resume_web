import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from '@app/core/guards/admin-auth.guard';

import { Layouts } from '../app.component';
import {
    AdminLoginComponent,
    AdminComponent,
    CompanyJobListComponent,
    ForgetComponent,
    HomeComponent,
    ResetPasswordComponent,
    ResumeInvitationsComponent,
} from './pages';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: '', redirectTo: 'company-job', pathMatch: 'full' },
            { path: 'login', component: AdminLoginComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'forget', component: ForgetComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'reset-password', component: ResetPasswordComponent, data: { layout: Layouts.adminLogin }, },

            { path: 'resume-invitation', component: ResumeInvitationsComponent, data: { layout: Layouts.adminMain }, },
            { path: 'message', component: HomeComponent, data: { layout: Layouts.adminMain }, },
            { path: 'company-job', component: CompanyJobListComponent, data: { layout: Layouts.adminMain }, },
            { path: 'member', component: HomeComponent, data: { layout: Layouts.adminMain }, },
        ],
        canLoad: [AdminAuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }