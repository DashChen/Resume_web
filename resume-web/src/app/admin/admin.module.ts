import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent, AboutComponent, AdminComponent, HomeComponent } from './pages';
import { ComponentModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material-module';
import { ForgetComponent } from './pages/forget/forget.component';
import { CompanyJobListComponent } from './pages/company-job-list/company-job-list.component';
import { CompanyJobAddDialogComponent } from './pages/company-job-add-dialog/company-job-add-dialog.component';
import { CompanyJobEditDialogComponent } from './pages/company-job-edit-dialog/company-job-edit-dialog.component';
import { CompanyJobDeleteDialogComponent } from './pages/company-job-delete-dialog/company-job-delete-dialog.component';

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