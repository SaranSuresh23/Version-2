import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFertilizerscategoryComponent } from './add-fertilizerscategory.component';

describe('AddFertilizerscategoryComponent', () => {
  let component: AddFertilizerscategoryComponent;
  let fixture: ComponentFixture<AddFertilizerscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFertilizerscategoryComponent]
    });
    fixture = TestBed.createComponent(AddFertilizerscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
