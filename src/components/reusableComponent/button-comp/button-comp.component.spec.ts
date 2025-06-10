import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCompComponent } from './button-comp.component';

describe('ButtonCompComponent', () => {
  let component: ButtonCompComponent;
  let fixture: ComponentFixture<ButtonCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
