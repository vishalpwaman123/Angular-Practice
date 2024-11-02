import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input()
  count: number = 0;

  @Output()
  handleAdd = new EventEmitter();

  @Output()
  handleSub = new EventEmitter();

  constructor() {
    console.log('Child constructor calling.....');
  }

  handleParentAdd() {
    debugger;
    this.handleAdd.emit();
  }

  handleParentSub() {
    this.handleSub.emit();
  }
}
