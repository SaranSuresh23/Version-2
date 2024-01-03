/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPotComponent } from './edit-pot.component';

describe('EditPotComponent', () => {
  let component: EditPotComponent;
  let fixture: ComponentFixture<EditPotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
