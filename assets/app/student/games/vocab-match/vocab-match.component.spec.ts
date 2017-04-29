/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VocabMatchComponent } from './vocab-match.component';

describe('VocabMatchComponent', () => {
  let component: VocabMatchComponent;
  let fixture: ComponentFixture<VocabMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
