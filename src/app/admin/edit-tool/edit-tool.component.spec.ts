/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditToolComponent } from './edit-tool.component';

describe('EditToolComponent', () => {
  let component: EditToolComponent;
  let fixture: ComponentFixture<EditToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
