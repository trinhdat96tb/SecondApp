import { NgModule } from "@angular/core";
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component'
import { MenuComponent } from '../layout/menu/menu.component';
import { HeaderComponent } from '../layout/header/header.component';
import { UpperCaseDirective, MnDirective } from '../layout/menu/menu.directive';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        PagesComponent,
        MenuComponent,
        HeaderComponent,
        UpperCaseDirective,
        MnDirective,
    ],
    providers: [

    ]

})

export class PagesModule {

}