import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DocumentFile } from '../models/DocumentFile.model';


@Injectable({
  providedIn: 'root'
})
export class DbFileService {


  constructor(private dbService: NgxIndexedDBService) {
    dbService.currentStore = 'files';
  }

  get() {

    console.log("here not work");
    this.dbService.getAll().then(
      people => {
        console.log(people);
      },
      error => {
        console.log(error);
      }
    );
  }

  getByKey(id) {
    //
    id = 1572364293056 // <-work
    this.dbService.getByID(1572364293056).then(
      person => {
        console.log(person);
        return person;
      },
      error => {
        console.log(error);
        return null;
      }
    );
  }

  add(file: DocumentFile) {

    this.dbService.add({ id: file.id, file }).then(
      () => {
        return file.id;
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

  update() {

  }
}
