/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Accessories1Component } from './accessories1.component';

describe('Accessories1Component', () => {
  let component: Accessories1Component;
  let fixture: ComponentFixture<Accessories1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accessories1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accessories1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
