import { TestBed } from '@angular/core/testing';

import { AddElementService } from './add-element.service';

describe('AddElementService', () => {
  let service: AddElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
