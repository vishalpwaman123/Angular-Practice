import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  _name: string = '';
  _date: Date = new Date();
  user = {
    name: 'John Doe',
    age: 30,
    location: 'New York'
  };
  constructor() {
    console.log('Parent Constructor Calling.....');
  }

  handleSubmit(event: HTMLInputElement) {
    console.log(event.value);
    this._name = event.value;
    console.log(event.type);
    console.log(event.name);
    console.log(event.placeholder);
  }
}
