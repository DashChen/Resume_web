import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatRadioModule,
    MatLuxonDateModule,
    MatChipsModule,
    MatSortModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
  ]
})
export class MaterialModule {}