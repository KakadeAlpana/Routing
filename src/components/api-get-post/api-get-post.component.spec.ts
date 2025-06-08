import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGetPostComponent } from './api-get-post.component';

describe('ApiGetPostComponent', () => {
  let component: ApiGetPostComponent;
  let fixture: ComponentFixture<ApiGetPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiGetPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
