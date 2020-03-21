import {  Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service';
import { DocumentlistComponent } from '../documentlist/documentlist.component';
import { DocumentlistDatasourceService } from '../documentlist-datasource.service';

export interface DialogData {
   name: string;
}

var DOCUMENTS_DATA = [];

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css'],
  
})
export class NewDocumentComponent implements OnInit {
    
  dataSource = [];

  ngOnInit() {

    
    
  }
  constructor(public dialogRef: MatDialogRef<NewDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData , public firebaseService: FirebaseService , private data1: DocumentlistDatasourceService) {
    
      
  }

  onCancelClick(): void {
    this.dialogRef.close();
  } 

  onSaveClick(document_name): void {

    console.log('save called');
        
    if(document_name != null){
      
     this.firebaseService.createDocument(document_name);
      
      console.log('Docunents' + DOCUMENTS_DATA);
      this.data1.changeDatasource(document_name);
            
    }
  }
 
}


