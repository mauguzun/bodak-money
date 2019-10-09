import { Component, OnInit } from '@angular/core';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { DbFileService } from 'src/app/shared/services/dbfile.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  files: DocumentFile[];


  constructor(private dbservice: DbFileService) { }

  ngOnInit() {
    this.files = [];
    this.dbservice.get().then(files => {
      files.forEach(element => {
        this.files.push(element.file);
      });
    })
  }

  delete(id) {
    this.dbservice.delete(id);

  }

}
