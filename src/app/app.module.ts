import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { UaaService } from './uaa.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OAuthModule.forRoot(), HttpModule, HttpClientModule],
  providers: [UaaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
