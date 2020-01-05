import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { moveItemInArray, CdkDragDrop, } from '@angular/cdk/drag-drop';
import { BuilderElement, ElementType } from '../../shared/models/BuilderElement';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  @Output() onNewForm= new EventEmitter<BuilderElement[]>();

  public showOptions = false;
  public currentItem: BuilderElement = null;

  constructor() { }

  from: BuilderElement[] = [
    new BuilderElement(ElementType.input),
    new BuilderElement(ElementType.textarea),
  ];


  result: BuilderElement[] = [ new BuilderElement(ElementType.input)]
  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>): void {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.element.nativeElement.id === 'result') {

      this.result.splice(event.currentIndex, 0, Object.assign({}, this.from[event.previousIndex]));
    }
  }

  setValueToList($event) {
    this.result[$event.target.id].value = $event.target.value;
  }

  options(item) {
    this.currentItem = item;
    this.showOptions = true;

  }
  toogle() {
    this.showOptions = false;
  }

  saveForm() {
    alert('save form ! of cox not so easy ');
    this.onNewForm.emit(this.result);
  }
}