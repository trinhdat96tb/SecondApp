import { Routes, RouterModule } from '@angular/router';
import { Page4Component } from './page4.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

export const routes: Routes = [
    {
        path: '',
        component: Page4Component,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent 
            },
            {
                path: 'resetpass',
                component:ResetpassComponent
            }
        ]
    }
]

export const routing = RouterModule.forChild(routes);