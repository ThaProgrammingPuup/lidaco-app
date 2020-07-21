import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { LidHeaderSectionComponent } from './sections/lid-header-section/lid-header-section.component';
import { LidNavigationSectionComponent } from './sections/lid-navigation-section/lid-navigation-section.component';
import { LidFooterSectionComponent } from './sections/lid-footer-section/lid-footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent,
    LidHeaderSectionComponent,
    LidNavigationSectionComponent,
    LidFooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
