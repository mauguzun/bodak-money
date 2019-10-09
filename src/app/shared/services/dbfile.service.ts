import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { DocumentFile } from '../models/DocumentFile.model';

@Injectable({
  providedIn: 'root'
})
export class DbFileService {
  // https://www.npmjs.com/package/ngx-indexed-db

  private db: NgxIndexedDB;
  private num = 1;


  constructor() {
    console.log("open")
    this.db = new NgxIndexedDB('myDb', this.num);
    this.db.openDatabase(1, evt => {

      let objectStore = evt.currentTarget.result.createObjectStore('documents', { keyPath: 'id', autoIncrement: true })
      objectStore.createIndex('file', 'file', { unique: false });
    })
  }

  async get() {
    return await this.db.openDatabase(this.num).then(() => {
      return this.db.getAll('documents').then();
    });
  }

  add(file: DocumentFile) {

    this.db.add('documents', { id: file.id, file }).then(
      (data) => {
        console.log('saved');
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(file) {

  }
}
