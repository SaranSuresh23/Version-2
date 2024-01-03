import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStandscategoryComponent } from './add-standscategory.component';

describe('AddStandscategoryComponent', () => {
  let component: AddStandscategoryComponent;
  let fixture: ComponentFixture<AddStandscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStandscategoryComponent]
    });
    fixture = TestBed.createComponent(AddStandscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
