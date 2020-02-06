import {  Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { NewDocumentService } from '../new-document.service';

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

  name: string;

  constructor(private NewDocumentService: NewDocumentService ,public dialog: MatDialog) {
    console.log('test3');
    this.NewDocumentService.dialogOpenCalled$.subscribe(
      () => this.documentDialogOpen());
  }  
      documentDialogOpen(){
        console.log('dialog called');
        const dialogRef = this.dialog.open(TopBarComponent, {
          width: '250px',
          data: {name: this.name}
        });
      }  
     

  }

  
 
 


