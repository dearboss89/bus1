import { NgModule } from '@angular/core'
import {
  MAT_DATE_LOCALE,
  MatProgressBarModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatDialogModule,
} from '@angular/material'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatMenuModule } from '@angular/material/menu'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
  ],
})
export class MaterialModule {}
