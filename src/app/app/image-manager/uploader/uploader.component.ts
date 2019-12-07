import { Component, OnInit, Output } from '@angular/core';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { DbFileService } from 'src/app/shared/services/dbfile.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  private reader: FileReader;
  loader = false;
  constructor(
    private dbService: DbFileService
  ) { }

  ngOnInit() { }


  onSelect(event) {
    event.addedFiles.forEach(file => {

      this.loader = true;
      this.reader = new FileReader();

      this.reader.onload = (e: ProgressEvent) => {
        const content = (e.target as FileReader).result;
        const doc = new DocumentFile(file, content.toString());

        this.dbService.add(doc);
        this.loader = false;
        
      };
      this.reader.readAsDataURL(file);
     
    });

  }

  onRemove(event) {
    console.log(event);

  }

}
