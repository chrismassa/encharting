import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { EnchartingDirective } from 'encharting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    SlideInDirective,
    EnchartingDirective,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  npmInstall: string = `
    # If you use npm
    npm install encharting --save
  `;
  yarnInstall: string = `
    # If you use yarn
    yarn add encharting
  `;
  import: string = `
    import { EnchartingModule } from 'encharting';

    @NgModule ({
      imports: [
        // ...
        EnchartingModule,
      ]
    })
    class AppModule {}
  `;
  htmlCode: string = `
    <div encharting></div>
  `;
}
