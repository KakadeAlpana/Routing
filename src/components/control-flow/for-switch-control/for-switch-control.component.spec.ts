import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwitchControlComponent } from './for-switch-control.component';

describe('ForSwitchControlComponent', () => {
  let component: ForSwitchControlComponent;
  let fixture: ComponentFixture<ForSwitchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwitchControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwitchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
