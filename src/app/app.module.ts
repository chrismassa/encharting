import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnchartingModule } from 'encharting';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnchartingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
