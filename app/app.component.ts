import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Template for {{currentFocus}}</h1>
    
  </div>

  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
}
