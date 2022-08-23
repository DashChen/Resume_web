import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginLayoutComponent } from './user-login-layout/user-login-layout.component';
import { UserMainLayoutComponent } from './user-main-layout/user-main-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminLoginLayoutComponent } from './admin-login-layout/admin-login-layout.component';
import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';

@NgModule({
  declarations: [
    UserLoginLayoutComponent,
    UserMainLayoutComponent,
    AdminLoginLayoutComponent,
    AdminMainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    UserLoginLayoutComponent,
    UserMainLayoutComponent,
    AdminLoginLayoutComponent,
    AdminMainLayoutComponent,
  ]
})
export class LayoutModule { }
