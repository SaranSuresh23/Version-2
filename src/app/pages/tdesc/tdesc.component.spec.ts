import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdescComponent } from './tdesc.component';

describe('TdescComponent', () => {
  let component: TdescComponent;
  let fixture: ComponentFixture<TdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
