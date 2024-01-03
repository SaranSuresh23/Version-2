import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeedscategoryComponent } from './add-seedscategory.component';

describe('AddSeedscategoryComponent', () => {
  let component: AddSeedscategoryComponent;
  let fixture: ComponentFixture<AddSeedscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSeedscategoryComponent]
    });
    fixture = TestBed.createComponent(AddSeedscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
