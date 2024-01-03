import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PldescComponent } from './pldesc.component';

describe('PldescComponent', () => {
  let component: PldescComponent;
  let fixture: ComponentFixture<PldescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PldescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PldescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
