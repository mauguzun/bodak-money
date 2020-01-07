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

  @Output() onNewForm= new EventEmitter<BuilderElement[]>();

  public showOptions = false;
  public currentItem: BuilderElement = null;

  constructor(private snackBar: MatSnackBar) { }

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
    this.snackBar.open('Leha tut kak ta nada pudmat polushe !!! :) a to sliwkom legko ', null, {
      duration: 2000,
    });

    if(this.result.length == 0){
      return ;
    }
    for (const iterator of this.result) {
      if(iterator.name === null){
        alert("name must exist");
        return ;
      }
   
    }
    this.onNewForm.emit(this.result);
  }
}
