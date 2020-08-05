import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio'
import { MatMenuModule } from "@angular/material/menu"
import { MatCheckboxModule } from "@angular/material/checkbox"

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatSortModule,
    MatMenuModule,
    MatCheckboxModule,
  ]
})

export class AngularMaterialModule {}