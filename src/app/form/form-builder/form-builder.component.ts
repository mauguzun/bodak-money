import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { moveItemInArray, CdkDragDrop, } from '@angular/cdk/drag-drop';
import { BuilderElement, ElementType } from '../../shared/models/BuilderElement';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  @Output() onNewForm = new EventEmitter<BuilderElement[]>();

  public showOptions = false;
  public currentItem: BuilderElement = null;

  constructor(private snackBar: MatSnackBar) { }

  from: BuilderElement[] = [
    new BuilderElement(ElementType.input, 'Text Input'),
    new BuilderElement(ElementType.inputNumber, 'Number Input'),
    new BuilderElement(ElementType.select, 'Select '),
    new BuilderElement(ElementType.date, 'Date '),
    new BuilderElement(ElementType.textarea, 'Textarea'),
  ];


  result: BuilderElement[] = [ new BuilderElement(ElementType.select, 'Select '),]
  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>): void {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.element.nativeElement.id === 'result') {
      let copied = Object.assign({}, this.from[event.previousIndex]);
      copied.id = <any>new Date() / 1;
      this.result.splice(event.currentIndex, 0, copied);
    }
  }

  setValueToList($event) {
    this.result[$event.target.id].value = $event.target.value;
  }

  options(item, index) {

    this.currentItem = item;
    this.showOptions = true;

  }
  toogle() {
    this.showOptions = false;
  }
  delete() {
    this.result = this.result.filter(x => x.id !== this.currentItem.id);
    this.toogle();
  }

  saveForm() {
    this.snackBar.open('Leha tut kak ta nada pudmat polushe !!! :) a to sliwkom legko ', null, {
      duration: 2000,
    });

    if (this.result.length == 0) {
      return;
    }
    for (const iterator of this.result) {
      if (iterator.name === null) {
        alert("name must exist");
        return;
      }
    }
    this.onNewForm.emit(this.result);
  }
}
