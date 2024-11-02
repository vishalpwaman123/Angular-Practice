import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  name: string = '';
  constructor() {
    console.log('Parent Constructor Calling.....');
  }

  handleSubmit(event: HTMLInputElement) {
    console.log(event.value);
    console.log(event.type);
    console.log(event.name);
    console.log(event.placeholder);
  }
}
