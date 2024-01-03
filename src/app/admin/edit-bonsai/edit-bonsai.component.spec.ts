/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditBonsaiComponent } from './edit-bonsai.component';

describe('EditBonsaiComponent', () => {
  let component: EditBonsaiComponent;
  let fixture: ComponentFixture<EditBonsaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBonsaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBonsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
