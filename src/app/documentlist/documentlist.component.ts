import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { EditDocumentComponent } from '../edit-document/edit-document.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-documentlist',
  template: `
      `,
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit {
  
  constructor(public firebaseService: FirebaseService 
    , public dialog: MatDialog) {
    
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

  displayedColumns: string[] = ['is_selected','is_important','document_name','edit'];
  
  dataSource = [];

  showVar;

  oldDocumentName;

  ngOnInit() {
               
  }

  toggleChild(document_name) {
    console.log(document_name);
    this.firebaseService.importantUnimportantDocument(document_name);
    
 }
 
 name: string;

 editDocumentName(document_name) {

   console.log(document_name);

   console.log('open form');
       
    const dialogRef = this.dialog.open(EditDocumentComponent, {
      width: '250px',
      data: {name: document_name , old: document_name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });

 }

}
