import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm, FormGroupDirective } from '@angular/forms';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { form } from './form';
import { ErrorStateMatcher } from '@angular/material';

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
    console.log(this.dynamicForm.get('BillId').errors);
    console.log(this.dynamicForm.get('BillId').value);
  }

  saveDynamicForm(form: []) {
    this.defForm = form;
    this.initForm();
  }
}
