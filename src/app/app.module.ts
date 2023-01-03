import { FooterComponent } from './core/components/footer/footer.component';
import { SidemenuComponent } from './core/components/sidemenu/sidemenu.component';
import { TopbarComponent } from './core/components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnchartingModule } from 'encharting';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnchartingModule,
    BrowserAnimationsModule,
    // Standalone Components
    TopbarComponent,
    SidemenuComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
