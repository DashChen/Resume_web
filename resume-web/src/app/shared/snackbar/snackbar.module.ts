import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageSnackbarComponent } from './message-snackbar/message-snackbar.component';


@NgModule({
    declarations: [
        MessageSnackbarComponent
    ],
    exports: [
        MessageSnackbarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
    ],
})
export class SnackbarModule { }
