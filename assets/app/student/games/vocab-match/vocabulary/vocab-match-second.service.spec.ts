/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VocabMatchSecondService } from './vocab-match-second.service';

describe('VocabMatchSecondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocabMatchSecondService]
    });
  });

  it('should ...', inject([VocabMatchSecondService], (service: VocabMatchSecondService) => {
    expect(service).toBeTruthy();
  }));
});
