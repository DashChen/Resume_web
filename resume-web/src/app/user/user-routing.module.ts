import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { Layouts } from '../app.component';
import {
  ForgetComponent,
  LoginComponent,
  MemberManagementComponent,
  RegisterInfoComponent,
  RegisterComponent,
  ResetPasswordComponent,
  UserComponent,
  ResumeManagementComponent,
  ResumeManagementPreviewComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      // { path: '', redirectTo: 'member-management', pathMatch: 'full' },
      { path: 'member-management', component: MemberManagementComponent, data: { layout: Layouts.userMain }, },
      { path: 'resume-management', component: ResumeManagementComponent, data: { layout: Layouts.userMain }, },
      { path: 'resume-management-preview', component: ResumeManagementPreviewComponent, data: { layout: Layouts.userMain }, },
    ],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }