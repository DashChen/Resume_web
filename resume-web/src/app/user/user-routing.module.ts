import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/core/guards/auth.guard';
import { ResumeManagementPreviewComponent } from '@app/shared/components/resume-management-preview/resume-management-preview.component';
import { Layouts } from '../app.component';
import {
  MemberManagementComponent,
  UserComponent,
  ResumeManagementComponent,
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