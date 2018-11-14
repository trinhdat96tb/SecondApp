import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        TableComponent
    ],
    declarations: [
        TableComponent
    ]
})
export class TableModule { }

