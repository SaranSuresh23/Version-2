import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdescComponent } from './stdesc.component';

describe('StdescComponent', () => {
  let component: StdescComponent;
  let fixture: ComponentFixture<StdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
