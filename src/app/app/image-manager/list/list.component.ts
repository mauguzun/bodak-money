import { Component, OnInit } from '@angular/core';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { DbFileService } from 'src/app/shared/services/dbfile.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  protected loader = true;
  files: DocumentFile[] = []


  constructor(private dbservice: DbFileService) { }

  ngOnInit() {
    this.setList();
  }

  delete(id) {

  }

  setList() {
   
    this.dbservice.get()


  }
}
