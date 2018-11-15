import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';

export const routes: Routes = [
    {
        path: '',
        component: FormComponent
    }
]

export const routing = RouterModule.forChild(routes);