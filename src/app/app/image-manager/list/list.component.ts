import { Component, OnInit } from '@angular/core';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { Subject, Observable, from } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // protected loader = true;
 


  constructor(public dbservice: DbFileService) { }

  ngOnInit() {

  }

  delete(id) {
    this.dbservice.delete(Number(id)).then(data => {

    })

  }



  

}

