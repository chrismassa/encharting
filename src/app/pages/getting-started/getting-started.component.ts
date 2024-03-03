import { Component } from '@angular/core';
import { SlideInDirective } from 'src/app/shared/directives/slide-in.directive';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { EnchartingDirective } from 'encharting';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [
    CodeSnippetComponent,
    SlideInDirective,
    EnchartingDirective,
    MatButtonModule,
    MatIconModule,
    RouterLink
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
