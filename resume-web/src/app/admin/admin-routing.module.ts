import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from '@app/core/guards/admin-auth.guard';
import { ResumeManagementPreviewComponent } from '@app/shared/components/resume-management-preview/resume-management-preview.component';

import { Layouts } from '../app.component';
import {
    AdminLoginComponent,
    AdminComponent,
    CompanyJobListComponent,
    ForgetComponent,
    ResetPasswordComponent,
    ResumeInvitationsComponent,
    MemberManagementComponent,
    MessageComponent,
    ResumeInvitationSendFormComponent,
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
            { path: 'resume-invitation/send-message', component: ResumeInvitationSendFormComponent, data: { layout: Layouts.adminMain }, },
            { path: 'message', redirectTo: 'message/email', pathMatch: 'full' },
            { path: 'message/:type', component: MessageComponent, data: { layout: Layouts.adminMain }, },
            { path: 'company-job', component: CompanyJobListComponent, data: { layout: Layouts.adminMain }, },
            { path: 'member', component: MemberManagementComponent, data: { layout: Layouts.adminMain }, },
            { path: 'resume-management-preview', component: ResumeManagementPreviewComponent, data: { layout: Layouts.adminMain }, },
        ],
        canLoad: [AdminAuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }