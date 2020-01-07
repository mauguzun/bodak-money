import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm, FormGroupDirective } from '@angular/forms';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { form } from './form';
import { ErrorStateMatcher } from '@angular/material';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';

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


  constructor(public dbservice: DbFileService) { }


  public files: DocumentFile[] = [];
  options: string[] = ['Check', 'other', 'hujzer'];

  dynamicForm: FormGroup;

  public defForm = form;
  public formName = null;


  ngOnInit(): void {

    this.dbservice.get().then(data => {
      this.files = data.filter(x => x.checked);
    })
    this.initForm()
  }


  initForm() {
    let forms = {};

    for (let i = 0; this.defForm[i]; i++) {
      const elem = this.defForm[i];

      var validators = [];
      if (elem.required === true) {
        validators.push(Validators.required);
      }

      forms[elem.name] = new FormControl(null, [Validators.required]);
    }
    this.dynamicForm = new FormGroup(forms);
  }
  submit() {
    if (this.dynamicForm.invalid) {
      alert('invalid')
    }
    let res ={}
    for (const field in this.dynamicForm.controls) {
      //    const control = this.dynamicForm.get(field); 
      res[field] = this.dynamicForm.get(field).value;
      alert(field + ' : ' + res[field])
    }

  
    console.log(JSON.stringify(res))
  }

  saveDynamicForm(form: []) {
    this.defForm = form;
    this.formName = 'self maded'
    this.initForm();
  }

  saveFromExist() {
    this.defForm = this.defForm;

  }
}
