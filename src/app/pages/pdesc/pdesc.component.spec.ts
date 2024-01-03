import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdescComponent } from './pdesc.component';

describe('PdescComponent', () => {
  let component: PdescComponent;
  let fixture: ComponentFixture<PdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
