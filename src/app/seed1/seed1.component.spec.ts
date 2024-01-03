/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Seed1Component } from './seed1.component';

describe('Seed1Component', () => {
  let component: Seed1Component;
  let fixture: ComponentFixture<Seed1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seed1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seed1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
