/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tool1Component } from './tool1.component';

describe('Tool1Component', () => {
  let component: Tool1Component;
  let fixture: ComponentFixture<Tool1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tool1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tool1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
