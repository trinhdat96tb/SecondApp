import { NgModule } from "@angular/core";
import { routing } from './pages.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { TableComponent } from '../layout/table/table.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PresenterComponent } from './presenter/presenter.component';
import { Page4Component } from './page4/page4.component';
import { PagesComponent } from './pages.component'
import { MenuComponent } from '../layout/menu/menu.component';
import { HeaderComponent } from '../layout/header/header.component';
import { UpperCaseDirective, MnDirective } from '../layout/menu/menu.directive';
import { ChartModule } from "./chart/chart.module";

@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        ChartModule
    ],
    declarations: [
        PagesComponent,
        HomeComponent,
        FormComponent,
        PresenterComponent,
        Page4Component,
        MenuComponent,
        HeaderComponent,
        TableComponent,
        UpperCaseDirective,
        MnDirective,
    ],
    providers: [

    ]

})

export class PagesModule {

}