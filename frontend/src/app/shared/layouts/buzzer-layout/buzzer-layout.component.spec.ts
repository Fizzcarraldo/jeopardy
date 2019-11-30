import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzerLayoutComponent } from './buzzer-layout.component';

describe('BuzzerLayoutComponent', () => {
  let component: BuzzerLayoutComponent;
  let fixture: ComponentFixture<BuzzerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
