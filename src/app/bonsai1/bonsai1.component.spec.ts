/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Bonsai1Component } from './bonsai1.component';

describe('Bonsai1Component', () => {
  let component: Bonsai1Component;
  let fixture: ComponentFixture<Bonsai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bonsai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bonsai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
