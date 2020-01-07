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
  @Input() element: BuilderElement;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.changeOption.next();
  }


  delete() {

  }
}
