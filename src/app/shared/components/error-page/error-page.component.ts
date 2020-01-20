import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errors: string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) {
    this.errors = data;
  }


  ngOnInit() {
  }

}
