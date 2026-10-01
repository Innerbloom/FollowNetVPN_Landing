import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangSuggestComponent } from './shared/lang-suggest/lang-suggest.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LangSuggestComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Follow Net';
}
