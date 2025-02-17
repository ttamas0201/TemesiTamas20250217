// src/app/child/child.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;
  @Output() result = new EventEmitter<number>();

  calculate(operation: string) {
    if (operation === '+') {
      this.result.emit(Number(this.a) + Number(this.b));
    } else if (operation === '-') {
      this.result.emit(Number(this.a) - Number(this.b));
    }
  }
}