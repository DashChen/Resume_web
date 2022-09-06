import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layouts } from '../app.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterInfoComponent } from './pages/register-info/register-info.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
      data: {
        layout: Layouts.userLogin
      }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: {
        layout: Layouts.userLogin
      }
    },
    {
      path: 'register-info',
      component: RegisterInfoComponent,
      data: {
        layout: Layouts.userLogin
      }
    },
    {
      path: 'forget',
      component: ForgetComponent,
      data: {
        layout: Layouts.userLogin
      }
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent,
      data: {
        layout: Layouts.userLogin
      }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }