import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

var DOCUMENTS_DATA = new Array<any>();

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit {

  displayedColumns: string[] = ['document_name'];
  dataSource = DOCUMENTS_DATA;

  constructor(public firebaseService: FirebaseService) { 

    this.firebaseService.getDocumentList()
    .subscribe(result => {
      result.forEach((doc) => {
        DOCUMENTS_DATA.push(doc.payload.doc.data());
        this.dataSource = DOCUMENTS_DATA;
        console.log('pushed');
      });
    });
    DOCUMENTS_DATA = [
      {document_name: "cow", is_important: 0}
    ];
    console.log(DOCUMENTS_DATA);
    this.dataSource = DOCUMENTS_DATA;
    console.log(DOCUMENTS_DATA);
  }

  ngOnInit() {
    
  }
  
}
