import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layouts } from '../app.component';
import { AboutComponent, AdminComponent, HomeComponent } from './pages';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        data: { layout: Layouts.userMain },
        children: [
            { path: 'about', component: AboutComponent, data: { layout: Layouts.userMain }, },
            { path: 'home', component: HomeComponent, data: { layout: Layouts.userMain }, },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }