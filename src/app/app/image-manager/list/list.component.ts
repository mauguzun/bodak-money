import { Component, OnInit } from '@angular/core';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  protected loader = true;
  files: DocumentFile[] = []
 
  $stream ;

  constructor(private dbservice: DbFileService) { }

  ngOnInit() {
    this.setList();
    
  }

  delete(id) {
    this.dbservice.delete(Number(id)).then(data => {
      this.setList();
    })

  }

  setList() {
    this.loader = true;
    this.dbservice.get();


     this.$stream =  this.dbservice.get();
    

    this.dbservice.get().then(
      (result: DocumentFile[]) => {
        this.files = result;
        console.log( this.files);
        this.loader = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  test(){
    this.dbservice.delete(this.files[0].id)
    this.$stream =  this.dbservice.get();
  }

}

