import { NgModule } from '@angular/core';
import { Page4Component } from './page4.component';
import { routing } from './page4.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';

@NgModule({
    imports: [
        routing
    ],
    declarations: [
        Page4Component,
        LoginComponent,
        RegisterComponent,
        ResetpassComponent
    ],
    providers: [

    ]
})

export class Page4Module {

}