import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRowComponent } from './question-row.component';

describe('QuestionRowComponent', () => {
  let component: QuestionRowComponent;
  let fixture: ComponentFixture<QuestionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
