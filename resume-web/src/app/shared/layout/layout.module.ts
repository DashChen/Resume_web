import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginLayoutComponent } from './user-login-layout/user-login-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';

@NgModule({
  declarations: [
    UserLoginLayoutComponent,
    AdminLoginLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    UserLoginLayoutComponent,
    AdminLoginLayoutComponent
  ]
})
export class LayoutModule { }
