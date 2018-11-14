import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';
import { ChartComponent } from './chart.component';

export const routes: Routes = [
    {
        path: 'chart',
        component: ChartComponent,
        children: [
            {
                path: 'bar',
                component: BarComponent
            },
            {
                path: 'line',
                component: LineComponent
            }
        ]
    }
]

export const routing = RouterModule.forRoot(routes);