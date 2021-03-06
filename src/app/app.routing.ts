// import { AuthGuard } from './shared/auth.guard';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/pages/pages.module#PagesModule'
    },
    {
        path: '**', redirectTo: ''
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules });