import { Routes, RouterModule } from '@angular/router';
import { Page4Component } from './page4.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/page4',
        pathMatch: 'full'
    },
    {
        path: 'page4',
        component: Page4Component
    }
]

export const routing = RouterModule.forRoot(routes);