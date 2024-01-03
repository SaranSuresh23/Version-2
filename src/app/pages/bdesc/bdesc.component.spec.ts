import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdescComponent } from './bdesc.component';

describe('BdescComponent', () => {
  let component: BdescComponent;
  let fixture: ComponentFixture<BdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
