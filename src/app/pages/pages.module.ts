import { NgModule } from "@angular/core";
import { routing } from './pages.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { TableComponent } from '../layout/table/table.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
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
        Page1Component,
        Page2Component,
        Page3Component,
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