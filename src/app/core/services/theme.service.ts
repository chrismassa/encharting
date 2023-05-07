import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { EnchartingTheme } from 'encharting';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themes: {
    name: string,
    value: EnchartingTheme
  }[] = [
      {
        name: 'Default',
        value: 'default'
      },
      {
        name: 'Macarons',
        value: "macarons"
      },
      {
        name: 'Westeros',
        value: 'westeros'
      },
      {
        name: 'Chalk',
        value: 'chalk'
      },
      {
        name: 'Wonderland',
        value: 'wonderland'
      },
    ];

  theme$ = new BehaviorSubject<EnchartingTheme>(
    localStorage.getItem('encharting-theme') as EnchartingTheme ?? 'default'
  );

  switchTheme(theme: EnchartingTheme): void {
    document.body.classList.replace(this.theme$.value, theme);
    localStorage.setItem('encharting-theme', theme);
    this.theme$.next(theme);
  }

}
