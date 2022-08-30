import { TestBed } from '@angular/core/testing';

import { ConectPHPService } from './conect-php.service';

describe('ConectPHPService', () => {
  let service: ConectPHPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectPHPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
