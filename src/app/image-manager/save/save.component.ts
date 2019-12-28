import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})

export class SaveComponent implements OnInit {
  ngOnInit(): void {

  }

  myControl = new FormControl();
  options: string[] = ['check', 'other', 'hujzer'];
}
