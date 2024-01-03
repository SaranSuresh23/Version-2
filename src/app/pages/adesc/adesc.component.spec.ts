import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdescComponent } from './adesc.component';

describe('AdescComponent', () => {
  let component: AdescComponent;
  let fixture: ComponentFixture<AdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
