import { Component } from '@angular/core';
import data from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';
  data = data;
  currIndx = 0;
  
  constructor() {
    console.log(data);
  }
}
