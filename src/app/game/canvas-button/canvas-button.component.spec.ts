import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasButtonComponent } from './canvas-button.component';

describe('CanvasButtonComponent', () => {
  let component: CanvasButtonComponent;
  let fixture: ComponentFixture<CanvasButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
