import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoutingModule } from './user-routing.module';
import { ForgetComponent, LoginComponent, RegisterComponent } from '.';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '@app/shared';
import { RegisterInfoComponent } from './pages/register-info/register-info.component';
import { ResumeManagementComponent } from './pages/resume-management/resume-management.component';


@NgModule({
  declarations: [
      ForgetComponent,
      LoginComponent,
      RegisterComponent,
      RegisterInfoComponent,
      ResumeManagementComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ComponentModule
  ],
  providers: [],
})
export class UserModule { }