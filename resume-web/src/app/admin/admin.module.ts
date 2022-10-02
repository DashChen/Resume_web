import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material-module';

import { AdminRoutingModule } from './admin-routing.module';
import {
  AdminLoginComponent,
  AdminComponent,
  CompanyJobListComponent,
  CompanyJobAddDialogComponent,
  CompanyJobEditDialogComponent,
  CompanyJobDeleteDialogComponent,
  ForgetComponent,
  HomeComponent,
  ResetPasswordComponent,
  MessageComponent,
  MessagePreviewDialogComponent,
  MessageSearchDialogComponent,
  ResumeInvitationListComponent,
  ResumeInvitationStageDialogComponent,
  ResumeInvitationDeleteDialogComponent,
  ResumeInvitationSendFormComponent,
  ResumeInvitationSendAddDialogComponent,
  ResumeInvitationImportDialogComponent,
  ResumeInvitationsComponent,
} from './pages';
import { SharedModule } from '@app/shared/shared.module';
import { MemberManagementComponent } from './pages/member-management/member-management.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminComponent,
    HomeComponent,
    ForgetComponent,
    CompanyJobListComponent,
    CompanyJobAddDialogComponent,
    CompanyJobEditDialogComponent,
    CompanyJobDeleteDialogComponent,
    ResetPasswordComponent,
    MessageComponent,
    MessagePreviewDialogComponent,
    MessageSearchDialogComponent,
    ResumeInvitationListComponent,
    ResumeInvitationStageDialogComponent,
    ResumeInvitationDeleteDialogComponent,
    ResumeInvitationSendFormComponent,
    ResumeInvitationSendAddDialogComponent,
    ResumeInvitationImportDialogComponent,
    ResumeInvitationsComponent,
    MemberManagementComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ComponentModule,
  ],
  providers: [],
})
export class AdminModule { }