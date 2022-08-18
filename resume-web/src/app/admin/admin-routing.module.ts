import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, AdminComponent, HomeComponent } from './pages';

const routes: Routes = [
    {   path: 'admin', component: AdminComponent,
        children :[
            { path: 'about', component: AboutComponent},
            { path: 'home', component: HomeComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }