import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Directive({
  selector: '[slideIn]',
  standalone: true
})
export class SlideInDirective {

  @Input() direction: 'top' | 'right' | 'bottom' | 'left' = 'left';
  @Input() duration: number = 1500;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    anime({
      targets: this.el.nativeElement,
      ...this.getTranslationFromDirection(
        this.direction === 'left' || this.direction === 'right' ? this.el.nativeElement.offsetWidth : this.el.nativeElement.offsetHeight,
        this.direction
      ),
      duration: this.duration,
      easing: 'easeOutExpo'
    });
  }

  getTranslationFromDirection(from: number, direction: string): { translateX: [number, number] } | { translateY: [number, number] } {
    switch (direction) {
      case 'top':
        return { translateY: [-from, 0] };
      case 'right':
        return { translateX: [from, 0] };
      case 'bottom':
        return { translateY: [from, 0] };
      case 'left':
        return { translateX: [-from, 0] };
      default:
        return { translateX: [0, 0] };
    }
  }

}
