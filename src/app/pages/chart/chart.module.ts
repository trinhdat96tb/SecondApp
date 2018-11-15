import { NgModule } from '@angular/core';
import { routing } from './chart.routing';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { ChartComponent } from './chart.component';

@NgModule({
    imports: [
        routing,
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