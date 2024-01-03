/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Fertilizer1Component } from './fertilizer1.component';

describe('Fertilizer1Component', () => {
  let component: Fertilizer1Component;
  let fixture: ComponentFixture<Fertilizer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fertilizer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fertilizer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
