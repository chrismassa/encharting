import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    SlideInDirective
  ],
  template: `
    <mat-toolbar color="accent" class="footer row justify-between align-center" slideIn direction="bottom">
      <!-- <a href="https://www.flaticon.com/free-icons/business-and-finance" title="business and finance icons">Business and finance icons created by Freepik - Flaticon</a> -->
      <div class="row justify-center align-center gap-20">
        <a href="https://github.com/chrismassa/encharting" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://www.npmjs.com/package/encharting" target="_blank" rel="noopener noreferrer">
          <svg id="IconChangeColor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            height="50" width="50">
            <rect x="227.6" y="213.1" width="28.4" height="57.1" fill="#cb3837"></rect>
            <path
              d="M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z"
              id="mainIconPathAttribute" filter="url(#shadow)" fill="#cb3837"></path>
            <filter id="shadow">
              <feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black">
              </feDropShadow>
            </filter>
            <filter id="shadow">
              <feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black">
              </feDropShadow>
            </filter>
          </svg>
        </a>
      </div>
      <div class="row justify-center align-center">
        <span>Made with</span> 
        <mat-icon color="warn">favorite</mat-icon>
        <span>by <a class="gh" href="https://github.com/chrismassa" target="_blank" >@chrismassa</a></span>
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { }
