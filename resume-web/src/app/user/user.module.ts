import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentModule } from '@app/shared';
import { SharedModule } from '@app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material-module';
import {
  ForgetComponent,
  LoginComponent,
  RegisterComponent,
  RegisterInfoComponent,
  ResetPasswordComponent,
  MemberManagementComponent,
  UserComponent,
  ResumeManagementComponent,
  ResumeManagementFormComponent,
  ResumeManagementPreviewComponent,
  ResumeInvitationTitleDialogComponent,
  ResumeInvitationProfileDialogComponent,
  ResumeInvitationBasicDialogComponent,
  ResumeInvitationEducationDialogComponent,
  ResumeInvitationWorkDialogComponent,
  ResumeInvitationLicenseDialogComponent,
  ResumeInvitationAutobiographyDialogComponent,
  ResumeInvitationAppendixDialogComponent,
} from './pages';

@NgModule({
  declarations: [
    UserComponent,
    ForgetComponent,
    LoginComponent,
    RegisterComponent,
    RegisterInfoComponent,
    ResetPasswordComponent,
    MemberManagementComponent,
    ResumeManagementComponent,
    ResumeManagementFormComponent,
    ResumeManagementPreviewComponent,
    ResumeInvitationTitleDialogComponent,
    ResumeInvitationProfileDialogComponent,
    ResumeInvitationBasicDialogComponent,
    ResumeInvitationEducationDialogComponent,
    ResumeInvitationWorkDialogComponent,
    ResumeInvitationLicenseDialogComponent,
    ResumeInvitationAutobiographyDialogComponent,
    ResumeInvitationAppendixDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    ComponentModule
  ],
  providers: [],
})
export class UserModule { }