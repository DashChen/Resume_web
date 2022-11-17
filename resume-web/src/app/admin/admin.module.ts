import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentModule } from '@app/shared';
import { SharedModule } from '@app/shared/shared.module';
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
  MemberManagementComponent,
  MessageComponent,
  MessagePreviewDialogComponent,
  MessageSearchDialogComponent,
  ResumeInvitationListComponent,
  ResumeAddPersonDialogComponent,
  ResumeBatchLevelEditDialogComponent,
  ResumeImportPersonDialogComponent,
  ResumeInvitationStageDialogComponent,
  ResumeInvitationDeleteDialogComponent,
  ResumeInvitationSearchDialogComponent,
  ResumeInvitationSendFormComponent,
  ResumeInvitationSendAddDialogComponent,
  ResumeInvitationImportDialogComponent,
  ResumeInvitationsComponent,
} from './pages';

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
    ResumeInvitationSearchDialogComponent,
    ResumeAddPersonDialogComponent,
    ResumeBatchLevelEditDialogComponent,
    ResumeImportPersonDialogComponent,
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