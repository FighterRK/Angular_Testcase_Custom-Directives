import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBgDirective } from './set-bg.directive';
import { HeaderComponent } from './layouts/header/header.component';
import { HeaderDirective } from './header.directive';
import { HomeComponent } from './layouts/home/home.component';
import { BodyDirDirective } from './body-dir.directive';
import { CardDirective } from './card.directive';
import { BtnDirective } from './btn.directive';
import { FooterComponent } from './layouts/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SetBgDirective,
    HeaderComponent,
    HeaderDirective,
    HomeComponent,
    BodyDirDirective,
    CardDirective,
    BtnDirective,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
