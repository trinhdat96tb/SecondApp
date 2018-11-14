import { NgModule } from "@angular/core";
import { routing } from './pages.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { PagesComponent } from './pages.component'
import { MenuComponent } from '../layout/menu/menu.component';
import { HeaderComponent } from '../layout/header/header.component';
import { UpperCaseDirective, MnDirective } from '../layout/menu/menu.directive';
import { ChartModule } from "./chart/chart.module";
import { HomeModule } from "./home/home.module";
import { FormModule } from "./form/form.module";
import { PresenterModule } from "./presenter/presenter.module";
import { Page4Module } from "./page4/page4.module";

@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        ChartModule,
        HomeModule,
        FormModule,
        PresenterModule,
        Page4Module
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