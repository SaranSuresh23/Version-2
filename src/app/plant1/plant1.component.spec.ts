/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Plant1Component } from './plant1.component';

describe('Plant1Component', () => {
  let component: Plant1Component;
  let fixture: ComponentFixture<Plant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
