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
    <mat-toolbar color="accent" class="footer row justify-end align-center" slideIn direction="bottom">
      <!-- <a href="https://www.flaticon.com/free-icons/business-and-finance" title="business and finance icons">Business and finance icons created by Freepik - Flaticon</a> -->
      <span>Made with</span> 
      <mat-icon color="warn">favorite</mat-icon>
      <span>by <a class="gh" href="https://github.com/chrismassa" target="_blank" >@chrismassa</a></span>
    </mat-toolbar>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
