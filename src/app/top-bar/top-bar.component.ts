import { Component, OnInit ,EventEmitter, Input, Output  } from '@angular/core';
import { NewDocumentComponent } from '../new-document/new-document.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  
})
export class TopBarComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  name: string;

  openNewDocumentDialog() {
        
    const dialogRef = this.dialog.open(NewDocumentComponent, {
      width: '250px',
      data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });

    
  }

}
