import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})

export class SaveComponent implements OnInit {


  public files: DocumentFile[] = [];
  myControl = new FormControl();
  options: string[] = ['Check', 'other', 'hujzer'];


  constructor(public dbservice: DbFileService) { }
  ngOnInit(): void {

    this.dbservice.get().then(data => {
      this.files = data.filter(x => x.checked);
    })

  }


}
