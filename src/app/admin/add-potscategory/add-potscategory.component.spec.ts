import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotscategoryComponent } from './add-potscategory.component';

describe('AddPotscategoryComponent', () => {
  let component: AddPotscategoryComponent;
  let fixture: ComponentFixture<AddPotscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPotscategoryComponent]
    });
    fixture = TestBed.createComponent(AddPotscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
