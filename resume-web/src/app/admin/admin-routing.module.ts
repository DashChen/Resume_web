import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layouts } from '../app.component';
import { AdminLoginComponent, AboutComponent, AdminComponent, HomeComponent } from './pages';
import { ForgetComponent } from './pages/forget/forget.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: 'login', component: AdminLoginComponent, data: { layout: Layouts.adminLogin }, },
            { path: 'forget', component: ForgetComponent, data: { layout: Layouts.adminLogin }, },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }