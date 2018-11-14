import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { TableModule } from '../../layout/table/table.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TableModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [

    ]
})

export class HomeModule {

}