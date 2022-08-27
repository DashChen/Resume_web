import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonDialogComponent } from '../dialog/common-dialog/common-dialog.component';
import { TermDialogComponent } from './term-dialog/term-dialog.component';
import { AddPersonDialogComponent } from './add-person-dialog/add-person-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BatchLevelEditDialogComponent } from './batch-level-edit-dialog/batch-level-edit-dialog.component';
import { ImportPersonDialogComponent } from './import-person-dialog/import-person-dialog.component';


@NgModule({
    declarations: [
        CommonDialogComponent,
        TermDialogComponent,
        AddPersonDialogComponent,
        BatchLevelEditDialogComponent,
        ImportPersonDialogComponent,
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
