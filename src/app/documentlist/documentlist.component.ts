import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { DocumentlistDatasourceService } from '../documentlist-datasource.service';

var DOCUMENTS_DATA = [];

@Component({
  selector: 'app-documentlist',
  template: `
      `,
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit {
  
  constructor(public firebaseService: FirebaseService , public data: DocumentlistDatasourceService) {

    this.firebaseService.getDocumentList()

      .subscribe(result => {
        
        result.forEach((doc) => {
          DOCUMENTS_DATA.push(doc.payload.doc.data());

        })

        this.dataSource = DOCUMENTS_DATA;
        
      })

  }

  displayedColumns: string[] = ['is_selected','document_name'];
  
  dataSource = [];

  ngOnInit() {
    console.log('parent component called');
    this.data.currentdataSource.subscribe(DOCUMENTS_DATA => this.dataSource = DOCUMENTS_DATA);
  }

}
