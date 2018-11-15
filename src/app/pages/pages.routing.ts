import { PagesComponent} from './pages.component';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PresenterComponent } from './presenter/presenter.component';
import { Page4Component } from './page4/page4.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/page/home',
        pathMatch: 'full'
    },
    {
        path: 'page',
        component: PagesComponent,
        canActivate: [],
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            // {
            //     path: 'form',
            //     component: FormComponent
            // },
            // {
            //     path: 'presenter',
            //     component: PresenterComponent
            // },
            // {
            //     path: 'page4',
            //     component: Page4Component
            // },
            {
                path: 'chart',
                loadChildren: './chart/chart.module#ChartModule'
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);


