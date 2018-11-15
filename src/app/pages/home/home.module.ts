import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { TableModule } from '../../layout/table/table.module';
import { routing } from './home.routing';

@NgModule({
    imports: [
        routing,
        TableModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [

    ]
})

export class HomeModule {

}