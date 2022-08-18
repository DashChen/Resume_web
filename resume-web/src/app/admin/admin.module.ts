import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminRoutingModule } from './admin-routing.module';
import { AboutComponent, AdminComponent, HomeComponent } from './pages';

@NgModule({
  declarations: [
      AboutComponent,
      AdminComponent,
      HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }