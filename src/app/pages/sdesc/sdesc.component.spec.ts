import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdescComponent } from './sdesc.component';

describe('SdescComponent', () => {
  let component: SdescComponent;
  let fixture: ComponentFixture<SdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
