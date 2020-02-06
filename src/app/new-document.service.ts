import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDocumentService {

  constructor() { }

  // Observable string sources
  private dialogOpenCallSource = new BehaviorSubject<any>('');

  // Observable string streams
  dialogOpenCalled$ = this.dialogOpenCallSource.asObservable();

  documentDialogOpen(){
    console.log('test2');
    this.dialogOpenCallSource.next('');
    
  }
  
}
