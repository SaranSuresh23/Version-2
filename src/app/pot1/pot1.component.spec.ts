/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pot1Component } from './pot1.component';

describe('Pot1Component', () => {
  let component: Pot1Component;
  let fixture: ComponentFixture<Pot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
