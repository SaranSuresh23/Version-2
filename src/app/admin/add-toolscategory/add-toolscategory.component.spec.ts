import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToolscategoryComponent } from './add-toolscategory.component';

describe('AddToolscategoryComponent', () => {
  let component: AddToolscategoryComponent;
  let fixture: ComponentFixture<AddToolscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToolscategoryComponent]
    });
    fixture = TestBed.createComponent(AddToolscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
