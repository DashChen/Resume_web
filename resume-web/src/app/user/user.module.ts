import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@app/shared/shared.module';
import { environment } from '../../environments/environment';
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
  ResumeInvitationTitleDialogComponent,
  ResumeInvitationProfileDialogComponent,
  ResumeInvitationBasicDialogComponent,
  ResumeInvitationEducationDialogComponent,
  ResumeInvitationWorkDialogComponent,
  ResumeInvitationLicenseDialogComponent,
  ResumeInvitationAutobiographyDialogComponent,
  ResumeInvitationAppendixDialogComponent,
} from './pages';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@app/core/social-login/public-api';
import { LineLoginProvider } from '@app/core/social-login/providers/line-login-provider';

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
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.social.GOOGLE.client_id,
              {
                client_id: environment.social.GOOGLE.client_id,
                ...environment.social.GOOGLE.options
              }
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              environment.social.FACEBOOK.client_id,
              environment.social.FACEBOOK.options
            )
          },
          {
            id: LineLoginProvider.PROVIDER_ID,
            provider: new LineLoginProvider(
              environment.social.LINE.client_id,
              environment.social.LINE.options
            )
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class UserModule { }