import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageLayoutComponent } from './stage-layout.component';

describe('StageLayoutComponent', () => {
  let component: StageLayoutComponent;
  let fixture: ComponentFixture<StageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
