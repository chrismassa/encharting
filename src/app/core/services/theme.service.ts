import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { EnchartingTheme } from 'projects/encharting/src/public-api';

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
        value: undefined
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

  theme$ = new BehaviorSubject<EnchartingTheme>(localStorage.getItem('encharting-theme') as EnchartingTheme);

}
