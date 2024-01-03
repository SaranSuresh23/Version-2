import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdescComponent } from './fdesc.component';

describe('FdescComponent', () => {
  let component: FdescComponent;
  let fixture: ComponentFixture<FdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
