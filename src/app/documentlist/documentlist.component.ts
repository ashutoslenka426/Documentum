import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-documentlist',
  template: `
      `,
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit {
  
  constructor(public firebaseService: FirebaseService) {
    
    var DOCUMENTS_DATA = [];
    console.log('called again')
    this.firebaseService.getDocumentList()
    
    .subscribe(result => {
      
      result.forEach((doc) => {
        DOCUMENTS_DATA.push(doc.payload.doc.data());

      })

      this.dataSource = DOCUMENTS_DATA;
      DOCUMENTS_DATA = [];
      
    })

  }

  displayedColumns: string[] = ['is_selected','is_important','document_name'];
  
  dataSource = [];

  showVar;

  ngOnInit() {
               
  }

  toggleChild() {
    this.showVar = !this.showVar;
 }

}
