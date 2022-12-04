import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import {
  CropperjsComponent,
  InputCountryMobileComponent,
  MemberManagementComponent,
  MenuPanelComponent,
  ResumeManagementPreviewComponent
} from './components';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { CommonDialogComponent, TermDialogComponent } from './dialog';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ObserveElementDirective } from './directives/observe-element.directive';
import { AdminLoginLayoutComponent, AdminMainLayoutComponent, UserLoginLayoutComponent, UserMainLayoutComponent } from './layout';
import { GetValueByKeyFromListPipe } from './pipes/get-value-by-key-from-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
  ],
  declarations: [
    GetValueByKeyFromListPipe,
    ObserveElementDirective,
    ClickOutsideDirective,
    PageTitleComponent,
    InputCountryMobileComponent,
    MenuPanelComponent,
    MemberManagementComponent,
    CropperjsComponent,
    ResumeManagementPreviewComponent,
    UserLoginLayoutComponent,
    UserMainLayoutComponent,
    AdminLoginLayoutComponent,
    AdminMainLayoutComponent,
    CommonDialogComponent,
    TermDialogComponent
  ],
  exports: [
    GetValueByKeyFromListPipe,
    ObserveElementDirective,
    ClickOutsideDirective,
    PageTitleComponent,
    InputCountryMobileComponent,
    MenuPanelComponent,
    MemberManagementComponent,
    CropperjsComponent,
    ResumeManagementPreviewComponent,
    UserLoginLayoutComponent,
    UserMainLayoutComponent,
    AdminLoginLayoutComponent,
    AdminMainLayoutComponent,
    CommonDialogComponent,
    TermDialogComponent
  ]
})
export class SharedModule {}