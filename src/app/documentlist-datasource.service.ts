import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentlistDatasourceService {

  constructor() { }

  private dataSource1 = new BehaviorSubject([] as any);
  currentdataSource = this.dataSource1.asObservable();

  changeDatasource(data : any[]){
    console.log('service called');
    this.dataSource1.next(data);
  }
  
}
