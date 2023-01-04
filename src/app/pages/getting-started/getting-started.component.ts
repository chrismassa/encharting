import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [
    CommonModule,
    SlideInDirective
  ],
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

}
