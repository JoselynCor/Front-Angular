import { TestBed } from '@angular/core/testing';

import { CapituloService } from './capituloS1.service';

describe('CapituloService', () => {
  let service: CapituloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapituloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
