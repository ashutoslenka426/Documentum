import { Component, OnInit ,EventEmitter, Input, Output ,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NewDocumentComponent } from '../new-document/new-document.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DeleteDocumentComponent } from '../delete-document/delete-document.component';
import { DocumentlistComponent } from '../documentlist/documentlist.component';

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

    console.log('open form');
       
    const dialogRef = this.dialog.open(NewDocumentComponent, {
      width: '250px',
      data: {name: this.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });

    
  }

  deleteNewDocumentDialog() {

    var elements = (<HTMLInputElement[]><any>document.getElementsByName("is_checked"));
    var isAnythingChecked = false;
    
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == "checkbox") {
         if (elements[i].checked) {
            isAnythingChecked = true;
            break;                      
          }
          else {
                        
          }
        }
      }

    if(isAnythingChecked == true){ 
      const dialogRef = this.dialog.open(DeleteDocumentComponent, {
        width: '250px'
        
      });
    }  
    
    
  }

}
