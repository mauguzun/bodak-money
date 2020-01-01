import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DocumentFile } from '../models/DocumentFile.model';
import { Subject, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbFileService {


  // list
  //

  public localdb: DocumentFile[] = [];
  public stream$ = from(this.get());

  constructor(private dbService: NgxIndexedDBService) {
    dbService.currentStore = 'files';

    this.dbService.getAll<DocumentFile>().then(data => {
      if (data.length > 0) {
        this.localdb = data;
      }
    });
  }

  

  reload() {
    this.stream$ = from(this.get());
  }

  get() {
    return this.dbService.getAll<DocumentFile>();
  }

  getByKey(id) {
    return this.dbService.getByID<DocumentFile>(id);
  }

  add(file: DocumentFile) {

    this.dbService.add(file).then(
      () => {
        this.localdb.push(file);
        // this.reload();
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
        this.localdb = this.localdb.filter(x => x.id != id);
      },
      error => {
        console.log(error);
      }
    );
  }


  update(file) {
    console.log(file)

    this.localdb.filter(x => x.id === file.id)[0].src = file.src;
    this.localdb.filter(x => x.id === file.id)[0].checked = file.checked;
    return this.dbService.update(file);
  }


  // update(file) {

  //   return this.delete(file.id).then(
  //     () => {
  //       this.add(file);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

}
