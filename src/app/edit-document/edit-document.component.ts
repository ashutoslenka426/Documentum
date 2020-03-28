import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDocumentComponent> ,
     @Inject(MAT_DIALOG_DATA) public data: DialogData ,public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  } 

  onSaveClick(document_name , old): void {

    console.log('save called');
    console.log(' edit ' + old);
        
    if(document_name != null){
      
     this.firebaseService.editDocument(document_name , old);
                      
    }
  }


}
