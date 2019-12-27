import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DocumentFile } from '../models/DocumentFile.model';
import { Subject, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbFileService {


  public stream$ = from(this.get());

  constructor(private dbService: NgxIndexedDBService) {
    dbService.currentStore = 'files';

  }


  reload() {
    this.stream$ = from(this.get());
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
        this.reload();
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
        this.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  update(file) {
    return this.dbService.delete(file.id).then(
      () => {
        this.add(file);

      },
      error => {
        console.log(error);
      }
    );
  }

}