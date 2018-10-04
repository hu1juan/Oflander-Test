import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlankLayoutComponent } from './_layouts/blank-layout.component';
import { DefaultLayoutComponent } from './_layouts/default-layout.component';

import { NavbarComponent } from './_layouts/navbar/navbar.component';
import { LoginComponent } from './admin/login/login.component';
import { DefaultNavbarComponent } from './_layouts/default-navbar/default-navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { LandingPageService } from './_services/landingPage.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LandingPageComponent,
    BlankLayoutComponent,
    NavbarComponent,
    LoginComponent,
    DefaultNavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
