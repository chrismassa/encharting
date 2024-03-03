import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import * as Prism from 'prismjs';
import "prismjs/components/prism-typescript";
import { SlideInDirective } from '../../directives/slide-in.directive';

@Component({
  selector: 'app-code-snippet',
  template: `
    @if (fileName) {
      <small class="file-name">{{fileName}}</small>
    }
    <pre slideIn [direction]="direction" class="mat-elevation-z8">
      <code #codeElement [class]="'language-'+language">{{code}}</code>
    </pre>
    `,
  styles: [`
    pre {
        border-radius: 5px;
        overflow: auto;
        margin: 0;
    }

    .file-name {
        font-size: x-small;
        background-color: #2b2b2b;
        padding: 10px;
        color: #a3b7c6;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
  `],
  standalone: true,
  imports: [
    SlideInDirective,
    MatButtonModule,
    MatIconModule
  ],
})
export class CodeSnippetComponent implements AfterViewInit {

  @ViewChild('codeElement') codeElement!: ElementRef;
  @Input() code: string = '';
  @Input() language: string = 'html';
  @Input() fileName: string | null = null;
  @Input() direction: 'top' | 'right' | 'bottom' | 'left' = 'top';

  ngAfterViewInit(): void {
    Prism.highlightElement(this.codeElement.nativeElement);
  }

}
