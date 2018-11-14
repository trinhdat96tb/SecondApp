import { PagesComponent} from './pages.component';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PresenterComponent } from './presenter/presenter.component';
import { Page4Component } from './page4/page4.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full'
    },
    {
        path: 'page',
        component: PagesComponent,
        canActivate: [],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            },
            {
                path: 'form',
                loadChildren: './form/form.module#FormModule'
            },
            {
                path: 'presenter',
                loadChildren: './presenter/presenter.module#PresenterModule'
            },
            {
                path: 'page4',
                loadChildren: './page4/page4.module#Page4Module'
            },
            {
                path: 'chart',
                loadChildren: './chart/chart.module#ChartModule'
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);


