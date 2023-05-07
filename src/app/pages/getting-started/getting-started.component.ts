import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { EnchartingDirective } from 'encharting';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    SlideInDirective,
    EnchartingDirective,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

  npmInstall: string = `
    # If you use npm
    npm install encharting --save
  `;

  yarnInstall: string = `
    # If you use yarn
    yarn add encharting
  `;

  import: string = `
    import { EnchartingDirective } from 'encharting';

    @NgModule ({
      imports: [
        // ...
        EnchartingDirective,
      ]
    })
    class AppModule {}
  `;

  htmlCode: string = `
    <div encharting></div>
  `;

}
