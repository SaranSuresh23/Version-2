import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantscategoryComponent } from './add-plantscategory.component';

describe('AddPlantscategoryComponent', () => {
  let component: AddPlantscategoryComponent;
  let fixture: ComponentFixture<AddPlantscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlantscategoryComponent]
    });
    fixture = TestBed.createComponent(AddPlantscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
