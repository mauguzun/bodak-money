import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { BuilderElement } from 'src/app/shared/models/BuilderElement';

@Component({
  selector: 'app-form-options',
  templateUrl: './form-options.component.html',
  styleUrls: ['./form-options.component.css']
})
export class FormOptionsComponent implements OnInit {

  @Output() changeOption = new EventEmitter();
  @Output() deleteOption = new EventEmitter();
  @Input() element: BuilderElement;

  public showOtptions = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  save(): void {

   
    this.changeOption.next();
  }


  // rebuld
  values($event): void {

    this.showOtptions = false;
    this.element.options = new Map();
    const values = $event.target.value.split('\n');

    values.forEach(element => {
      const keyValue = element.split('=');
      if (keyValue[0].trim() !== '' && keyValue[1].trim() !== '') {
        this.element.options.set(keyValue[0].trim(), keyValue[1].trim());
      }
    });

    setTimeout(() => {
      this.showOtptions = true;

    }, 500)

  }

  mapValue(): string {


    let result = '';
    for (let key of this.element.options.keys()) {
      result += `${key}=${this.element.options.get(key)}\n`;
    }

    return result;
  }


  delete() {
    this.deleteOption.next();

  }
}
