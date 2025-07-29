import { TestBed } from '@angular/core/testing';

import { FovoritosService } from './fovoritos.service';

describe('FovoritosService', () => {
  let service: FovoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FovoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
