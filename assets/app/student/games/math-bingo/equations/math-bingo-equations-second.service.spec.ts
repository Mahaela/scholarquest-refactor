/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MathBingoEquationsSecondService } from './math-bingo-equations-second.service';

describe('MathBingoEquationsSecondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathBingoEquationsSecondService]
    });
  });

  it('should ...', inject([MathBingoEquationsSecondService], (service: MathBingoEquationsSecondService) => {
    expect(service).toBeTruthy();
  }));
});
