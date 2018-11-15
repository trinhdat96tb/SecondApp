import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Page4Component } from './page4.component';
import { routing } from './page4.routing';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        Page4Component
    ],
    providers: [

    ]
})

export class Page4Module {

}