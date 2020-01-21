import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm, FormGroupDirective } from '@angular/forms';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { ErrorStateMatcher } from '@angular/material';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { FormsService } from 'src/app/shared/services/forms.service';

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


  constructor(public dbservice: DbFileService, public formsService: FormsService) { }


  public files: DocumentFile[] = [];

  dynamicForm: FormGroup;
  public selectedForm = null;
  public serializedForm = null;


  private currForm: any = null;

  get currentForm(): any {
    return this.currForm;
  }

  set currentForm(name: any) {

    this.selectedForm = this.forms.find(x => x.name === name);
    this.currForm = name;
    this.initForm();
  }

  public forms: { name: string, form: string }[] = this.formsService.allForms;


  ngOnInit(): void {

    this.dbservice.get().then(data => {
      this.files = data.filter(x => x.checked);
    });
  }


  initForm() {

    const forms = {};
    this.serializedForm = JSON.parse(this.selectedForm.form);



    for (let i = 0; this.serializedForm[i]; i++) {
      const elem = this.serializedForm[i];

      let validators = [];
      if (elem.required === true) {
        validators.push(Validators.required);
      }
      forms[elem.name] = new FormControl(null, [Validators.required]);
    }
    this.dynamicForm = new FormGroup(forms);
  }
  submit() {
    if (this.dynamicForm.invalid) {
      alert('invalid');
      return;
    }
    const res = {};
    for (const field in this.dynamicForm.controls) {
      //    const control = this.dynamicForm.get(field);
      res[field] = this.dynamicForm.get(field).value;
      // alert(field + ' : ' + res[field]);
    }


    alert(JSON.stringify(res));
  }




}
