/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Stand1Component } from './stand1.component';

describe('Stand1Component', () => {
  let component: Stand1Component;
  let fixture: ComponentFixture<Stand1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stand1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
