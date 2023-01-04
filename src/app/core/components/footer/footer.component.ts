import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  template: `
    <mat-toolbar color="accent" class="footer row justify-end align-center">
      <span>Made with</span> 
      <mat-icon color="warn">favorite</mat-icon>
      <span>by <a class="gh" href="https://github.com/chrismassa" target="_blank" >@chrismassa</a></span>
    </mat-toolbar>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
