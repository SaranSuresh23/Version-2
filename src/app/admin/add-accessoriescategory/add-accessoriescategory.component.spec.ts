import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessoriescategoryComponent } from './add-accessoriescategory.component';

describe('AddAccessoriescategoryComponent', () => {
  let component: AddAccessoriescategoryComponent;
  let fixture: ComponentFixture<AddAccessoriescategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAccessoriescategoryComponent]
    });
    fixture = TestBed.createComponent(AddAccessoriescategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
