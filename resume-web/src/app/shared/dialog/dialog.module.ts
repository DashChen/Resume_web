import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonDialogComponent } from '../dialog/common-dialog/common-dialog.component';
import { TermDialogComponent } from './term-dialog/term-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CommonDialogComponent,
        TermDialogComponent,
    ],
    exports: [
        CommonDialogComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
})
export class DialogModule { }
