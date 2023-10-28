import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [CommonModule, BrowserModule, RouterModule]
})
export class AppComponent {
  title = 'web';

  constructor() {}

  teste = 'opaa';
}
