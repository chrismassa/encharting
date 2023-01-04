import anime from 'animejs/lib/anime.es.js';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SlideInDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    anime({
      targets: 'div.hello',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    });
  }
}
