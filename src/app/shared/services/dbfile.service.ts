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
    return this.dbService.getAll();
  }

  getByKey(id) {

    return this.dbService.getByID(id);
  }

  add(file: DocumentFile) {

    this.dbService.add({ id: file.id, file }).then(
      () => {
        return file;
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

  delete(id) {
    return this.dbService.delete(id).then(
      () => {

      },
      error => {
        console.log(error);
      }
    );
  }

  update(file) {
    return this.dbService.delete(file.id).then(
      () => {
        this.add(file)
      },
      error => {
        console.log(error);
      }
    );
  }

}