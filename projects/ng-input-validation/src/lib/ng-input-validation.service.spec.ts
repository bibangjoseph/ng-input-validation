import { TestBed } from '@angular/core/testing';

import { NgInputValidationService } from './ng-input-validation.service';

describe('NgInputValidationService', () => {
  let service: NgInputValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgInputValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
