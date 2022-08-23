import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent, AboutComponent, AdminComponent, HomeComponent } from './pages';
import { ComponentModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material-module';
import { ForgetComponent } from './pages/forget/forget.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AboutComponent,
    AdminComponent,
    HomeComponent,
    ForgetComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ComponentModule
  ],
  providers: [],
})
export class AdminModule { }