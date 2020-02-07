import {  Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
   name: string;
}

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.css'],
  
})
export class NewDocumentComponent implements OnInit {
  
  ngOnInit() {
  }
  constructor(public dialogRef: MatDialogRef<NewDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    
     
  }

  onCancelClick(): void {
    this.dialogRef.close();
  } 

  
 
}


