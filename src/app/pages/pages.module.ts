import { NgModule } from "@angular/core";
import { routing } from './pages.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { TableComponent } from '../layout/table/table.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PresenterComponent } from './presenter/presenter.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { PagesComponent } from './pages.component'
import { MenuComponent } from '../layout/menu/menu.component';
import { HeaderComponent } from '../layout/header/header.component';


@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        PagesComponent,
        HomeComponent,
        FormComponent,
        PresenterComponent,
        Page4Component,
        Page5Component,
        MenuComponent,
        HeaderComponent,
        TableComponent
    ],
    providers: [

    ]

})

export class PagesModule {

}