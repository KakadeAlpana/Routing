import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempateComponent } from './ng-tempate.component';

describe('NgTempateComponent', () => {
  let component: NgTempateComponent;
  let fixture: ComponentFixture<NgTempateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTempateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
