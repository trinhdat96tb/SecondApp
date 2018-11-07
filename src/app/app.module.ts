import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { TableComponent } from './layout/table/table.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';

import { HeroService } from './services/hero.service';

import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

import{ routing } from './app.routing'

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TableComponent,
    MenuComponent,
    PagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    PagesComponent,
    PagesModule,
    routing
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
