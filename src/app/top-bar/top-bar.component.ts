import { Component, OnInit ,EventEmitter, Input, Output  } from '@angular/core';
import { NewDocumentService } from '../new-document.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  
})
export class TopBarComponent implements OnInit {
  
  constructor(private NewDocumentService: NewDocumentService) { }

  ngOnInit() {
  }

  openNewDocumentDialog() {
    console.log('test1');
    this.NewDocumentService.documentDialogOpen();
  }

}
