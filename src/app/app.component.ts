import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  styles: [
    require('../scss/app.scss')
  ],
  encapsulation: ViewEncapsulation.None,
  template: require('./app.component.html')
})

export class App {}