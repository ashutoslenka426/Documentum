import { TestBed } from '@angular/core/testing';

import { DocumentlistDatasourceService } from './documentlist-datasource.service';

describe('DocumentlistDatasourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentlistDatasourceService = TestBed.get(DocumentlistDatasourceService);
    expect(service).toBeTruthy();
  });
});
