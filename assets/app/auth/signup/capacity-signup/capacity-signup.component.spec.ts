/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapacitySignupComponent } from './capacity-signup.component';

describe('CapacitySignupComponent', () => {
  let component: CapacitySignupComponent;
  let fixture: ComponentFixture<CapacitySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
