import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewDocumentComponent, DialogData } from '../new-document/new-document.component';
import { FirebaseService } from '../firebase.service';


var DOCUMENTS_DATA = [];

@Component({
  selector: 'app-delete-document',
  templateUrl: './delete-document.component.html',
  styleUrls: ['./delete-document.component.css']
})
export class DeleteDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {

    console.log(' delete called');

    var elements_checkbox = (<HTMLInputElement[]><any>document.getElementsByName("is_checked"));
    console.log(elements_checkbox);
    
    var elements_document_name = document.getElementsByName("document_name");
    
    for (let i = 0 ; i < elements_checkbox.length; i++) {

        if (elements_checkbox[i].checked) {
          
          console.log('element passed ' + elements_document_name[i].innerText);

          this.firebaseService.deleteDocument(elements_document_name[i].innerText , true);      
          }
          else {
                        
          }
        
      }


    this.dialogRef.close();
   
  }

}
