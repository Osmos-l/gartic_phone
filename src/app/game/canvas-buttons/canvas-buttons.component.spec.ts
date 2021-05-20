import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasButtonsComponent } from './canvas-buttons.component';

describe('CanvasButtonsComponent', () => {
  let component: CanvasButtonsComponent;
  let fixture: ComponentFixture<CanvasButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
