import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { Input } from '@angular/core';
import * as Prism from 'prismjs';
import "prismjs/components/prism-typescript";
import { SlideInDirective } from '../../directives/slide-in.directive';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [
    CommonModule,
    SlideInDirective,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
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
