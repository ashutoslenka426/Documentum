import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentlistDatasourceService {

  constructor() { }

  private dataSource = new BehaviorSubject([] as any);
  currentdataSource = this.dataSource.asObservable();

  changeDatasource(data : any[]){
    console.log('service called');
    console.log(data);
    this.dataSource.next(data);
  }
  
}
