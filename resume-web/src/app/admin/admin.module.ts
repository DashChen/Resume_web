import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material-module';

import { AdminRoutingModule } from './admin-routing.module';
import {
  AdminLoginComponent,
  AboutComponent,
  AdminComponent,
  CompanyJobListComponent,
  CompanyJobAddDialogComponent,
  CompanyJobEditDialogComponent,
  CompanyJobDeleteDialogComponent,
  ForgetComponent,
  HomeComponent,
  ResetPasswordComponent,
  MessageComponent,
  ResumeInvitationListComponent,
  ResumeInvitationStageDialogComponent,
  ResumeInvitationDeleteDialogComponent,
  ResumeInvitationSendFormComponent,
  ResumeInvitationSendAddDialogComponent,
  ResumeInvitationImportDialogComponent,
  ResumeInvitationsComponent,
} from './pages';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    ForgetComponent,
    CompanyJobListComponent,
    CompanyJobAddDialogComponent,
    CompanyJobEditDialogComponent,
    CompanyJobDeleteDialogComponent,
    ResetPasswordComponent,
    MessageComponent,
    ResumeInvitationListComponent,
    ResumeInvitationStageDialogComponent,
    ResumeInvitationDeleteDialogComponent,
    ResumeInvitationSendFormComponent,
    ResumeInvitationSendAddDialogComponent,
    ResumeInvitationImportDialogComponent,
    ResumeInvitationsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ComponentModule,
  ],
  providers: [],
})
export class AdminModule { }