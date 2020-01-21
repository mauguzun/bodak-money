import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { moveItemInArray, CdkDragDrop, } from '@angular/cdk/drag-drop';
import { BuilderElement, ElementType } from '../../shared/models/BuilderElement';
import { MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { ErrorPageComponent } from 'src/app/shared/components/error-page/error-page.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  @Output() onNewForm = new EventEmitter<BuilderElement[]>();

  public showOptions = false;
  public currentItem: BuilderElement = null;
  public formName = null;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  from: BuilderElement[] = [
    new BuilderElement(ElementType.input, 'Text Input'),
    new BuilderElement(ElementType.inputNumber, 'Number Input'),
    new BuilderElement(ElementType.select, 'Select '),
    new BuilderElement(ElementType.date, 'Date '),
    new BuilderElement(ElementType.textarea, 'Textarea'),
  ];


  result: BuilderElement[] = [new BuilderElement(ElementType.input, 'Text Input')];
  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>): void {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.container.element.nativeElement.id === 'result') {
      const copied = Object.assign({}, this.from[event.previousIndex]);
      copied.id = new Date() as any / 1;
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

    const errors = new Set();





    if (this.result.length == 0) {
      errors.add('Please drop form element on result area');
    }
    for (const iterator of this.result) {
      if (iterator.name === null) {
        errors.add('All elements must have name');

      }
      if (iterator.type === ElementType.select && iterator.options.length === 0) {
        errors.add(iterator.name + ': drop down  must have options');
      }
    }
    if (errors.size === 0) {



      localStorage.setItem(this.formName, JSON.stringify(this.result));
      this.snackBar.open(`${this.formName} saved`);


      //   this.onNewForm.emit(this.result);
    } else {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth = '90%';
      dialogConfig.data = errors;

      this.dialog.open(ErrorPageComponent, dialogConfig);
    }

  }

}
