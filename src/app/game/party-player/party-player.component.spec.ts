import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPlayerComponent } from './party-player.component';

describe('PartyPlayerComponent', () => {
  let component: PartyPlayerComponent;
  let fixture: ComponentFixture<PartyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
