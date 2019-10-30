import { Injectable } from '@angular/core';
import { DocumentFile } from '../models/DocumentFile.model';

import Dexie from 'dexie';
import { DexieService } from './DexieService';



@Injectable({ providedIn: 'root' })


export class DbFileService {

  table: Dexie.Table<DocumentFile, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('todos');

    console.log(this.dexieService.isOpen())

  }

  get() {

    return this.table.toArray();
  }

  getByKey(key) {
    return this.table.get(Number(key));
  }

  add(file: DocumentFile) {
    return this.table.add(file);
  }

  update(file: DocumentFile) {
    return this.table.update(file.id, file)
    .then(()=> {})
    .catch(e => { alert(e) })
  }

  delete(id) {
    return this.table.delete(id);
  }
}
