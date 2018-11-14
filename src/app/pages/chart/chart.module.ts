import { NgModule } from '@angular/core';
import { routing } from './chart.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from './chart.component';

@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        ChartComponent,
        BarComponent,
        LineComponent
    ],
    providers: [

    ]
})

export class ChartModule {

}