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
}
