import { Component, OnInit, Input } from '@angular/core';
import { DocumentFile } from 'src/app/shared/models/DocumentFile.model';
import { DbFileService } from 'src/app/shared/services/dbfile.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() file: DocumentFile;

  constructor(public dbservice: DbFileService, private router: Router) { }

  ngOnInit() {

  }

  delete(id) {
    this.dbservice.delete(Number(id)).then(data => {

    });

  }
  tickCheckbox(id) {
    const item = this.dbservice.localdb.find(x => x.id === id);
    
    item.checked = !item.checked;
    this.dbservice.update(item);
  }

  save() {
    // todo checl
    this.router.navigate(['/', 'save']);
  }
}
