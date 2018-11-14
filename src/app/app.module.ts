import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './services/hero.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

import{ routing } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    PagesModule,
    routing
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
