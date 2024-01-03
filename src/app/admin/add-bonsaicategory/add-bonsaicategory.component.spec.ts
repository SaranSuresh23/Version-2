import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonsaicategoryComponent } from './add-bonsaicategory.component';

describe('AddBonsaicategoryComponent', () => {
  let component: AddBonsaicategoryComponent;
  let fixture: ComponentFixture<AddBonsaicategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBonsaicategoryComponent]
    });
    fixture = TestBed.createComponent(AddBonsaicategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
