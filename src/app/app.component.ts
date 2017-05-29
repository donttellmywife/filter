import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  caption: String = 'Licensee'
  values: String[] = ['one', 'two', 'three', 'four']
  selected: String = 'two'

  licenseeChange(event) {
      console.log(event)
  }
}
