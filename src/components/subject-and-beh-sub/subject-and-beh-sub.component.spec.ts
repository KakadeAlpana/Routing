import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndBehSubComponent } from './subject-and-beh-sub.component';

describe('SubjectAndBehSubComponent', () => {
  let component: SubjectAndBehSubComponent;
  let fixture: ComponentFixture<SubjectAndBehSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectAndBehSubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAndBehSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
