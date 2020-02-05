import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDocumentService {

  constructor() { }

  // Observable string sources
  private dialogOpenCallSource = new Subject<any>();

  // Observable string streams
  dialogOpenCalled$ = this.dialogOpenCallSource.asObservable();

  documentDialogOpen(){
    console.log('test2');
    this.dialogOpenCallSource.next();
    console.log('test3');
  }
  
}
