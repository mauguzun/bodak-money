import { Injectable } from '@angular/core';



export const testForm
  = [{
    required: true, name: 'BillId', placeholder: 'Bill Id',
    value: null, max: null, min: null,
    disabled: false, type: 'input'
  }, {
    required: true,
    name: 'amount', placeholder: 'amount',
    value: null, max: null, min: null,
    disabled: false, type: 'input'
  }];

@Injectable({
  providedIn: 'root'
})

export class FormsService {

  public allForms: { name: string, form: string }[] = [];


  constructor() {

    this.allForms.push({ name: 'First', form: JSON.stringify(testForm) });
    this.allForms.push({ name: 'Second', form: JSON.stringify(testForm) });

    if (localStorage) {

      Object.keys(localStorage).forEach( (key) =>{

        this.allForms.push({ name: key, form: localStorage.getItem(key) })
      });

    }
  }



}



