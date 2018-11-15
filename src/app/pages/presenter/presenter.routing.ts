import { Routes, RouterModule } from '@angular/router';
import { PresenterComponent } from './presenter.component';

export const routes: Routes = [
    {
        path: '',
        component: PresenterComponent
    }
]

export const routing = RouterModule.forChild(routes);
