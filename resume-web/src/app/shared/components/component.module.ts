import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageTitleComponent } from './page-title/page-title.component';
import { InputCountryMobileComponent } from './input-country-mobile/input-country-mobile.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CropperjsComponent } from './cropperjs/cropperjs.component';


@NgModule({
    declarations: [
        PageTitleComponent,
        InputCountryMobileComponent,
        MenuPanelComponent,
        MemberManagementComponent,
        CropperjsComponent,
    ],
    exports: [
        PageTitleComponent,
        InputCountryMobileComponent,
        MenuPanelComponent,
        MemberManagementComponent,
        CropperjsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
})
export class ComponentModule { }
