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

  _items: Object[] = [{
      type: 'two',
      name: 'this is one of them'
  },{
      type: 'one',
      name: 'whatf them'
  },{
      type: 'three',
      name: 'thidoh asd123them'
  },{
      type: 'two',
      name: 'this is YEA of them'
  },{
      type: 'three',
      name: 'asd'
  },{
      type: 'two',
      name: '123123'
  },]

  items: Object[] = []

  constractor() {
      this.items = this._items
  }

  licenseeChange(event) {
    let items = this._items.slice();
    if (event !== 'all') {
      items = items.filter((i) => {
        return i["type"] === event
      })
    }

    this.items = items;
    return items;
  }
}
