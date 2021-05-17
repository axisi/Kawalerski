import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WheelComponent } from './wheel/wheel.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ScoreComponent } from './score/score.component';
import { HpComponent } from './hp/hp.component';
import { RouleteComponent } from './roulete/roulete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WheelComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    UserComponent,
    AdminComponent,
    ScoreComponent,
    HpComponent,
    RouleteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
