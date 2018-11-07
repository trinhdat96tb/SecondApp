import { PagesComponent} from './pages.component';
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core'

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [],
        children: [
            {
                path: '',
                redirectTo: 'page1'
            },
            {
                path: 'page1',
                loadChildren: './page1/page1/module'
            },
            {
                path: 'page2',
                loadChildren: './page1/page1/module'
            },
            {
                path: 'page3',
                loadChildren: './page1/page1/module'
            },
            {
                path: 'page4',
                loadChildren: './page1/page1/module'
            },
            {
                path: 'page5',
                loadChildren: './page1/page1/module'
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


