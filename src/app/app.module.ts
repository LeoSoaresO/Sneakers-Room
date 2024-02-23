import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandComponent } from './pages/brand/brand.component';
import { SlidesComponent } from './components/slides/slides.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReleasesComponent } from './components/releases/releases.component';
import { WomenComponent } from './components/women/women.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './components/login/create-account/create-account.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    BrandComponent,
    SlidesComponent,
    ReleasesComponent,
    WomenComponent,
    MapComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
