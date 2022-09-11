import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageTitleComponent } from './page-title/page-title.component';
import { InputCountryMobileComponent } from './input-country-mobile/input-country-mobile.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';


@NgModule({
    declarations: [
        PageTitleComponent,
        InputCountryMobileComponent,
        MenuPanelComponent,
    ],
    exports: [
        PageTitleComponent,
        InputCountryMobileComponent,
        MenuPanelComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        MaterialModule,
        FlexLayoutModule,
    ],
})
export class ComponentModule { }
