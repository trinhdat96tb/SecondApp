import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    {
        path: 'app',
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
    },

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


