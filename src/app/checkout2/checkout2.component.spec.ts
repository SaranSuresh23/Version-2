/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Checkout2Component } from './checkout2.component';

describe('Checkout2Component', () => {
  let component: Checkout2Component;
  let fixture: ComponentFixture<Checkout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
