import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasDrawAreaComponent } from './canvas-draw-area.component';

describe('CanvasDrawAreaComponent', () => {
  let component: CanvasDrawAreaComponent;
  let fixture: ComponentFixture<CanvasDrawAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasDrawAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasDrawAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
