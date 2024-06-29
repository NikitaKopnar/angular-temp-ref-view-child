import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent! : ChildComponent;
  content = '';
  ngAfterViewInit() {
    this.childComponent.greeting();
  }
  callChildMethod() {
    this.content = this.childComponent.greeting();
  }
}
