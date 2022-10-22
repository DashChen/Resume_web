import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from './app.component';
import { LoginComponent, RegisterComponent, RegisterInfoComponent, UserComponent, ForgetComponent, ResetPasswordComponent } from './user';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { layout: Layouts.userLogin }, },
      { path: 'register', component: RegisterComponent, data: { layout: Layouts.userLogin }, },
      { path: 'register-info', component: RegisterInfoComponent, data: { layout: Layouts.userLogin }, },
      { path: 'forget', component: ForgetComponent, data: { layout: Layouts.userLogin }, },
      { path: 'reset-password', component: ResetPasswordComponent, data: { layout: Layouts.userLogin }, },
    ]
  },
  { path: '', redirectTo: '/user/login', pathMatch: 'full'},
  // { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
