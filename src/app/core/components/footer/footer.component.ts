import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  template: `
    <div class="footer row justify-center align-center gap-10">
      <span>Made with</span> 
      <mat-icon color="warn">favorite</mat-icon>
      <span>by Christian</span>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
