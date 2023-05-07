import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/routes';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
        Location, { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideAnimations()
    ]
})
    .catch(err => console.error(err));
