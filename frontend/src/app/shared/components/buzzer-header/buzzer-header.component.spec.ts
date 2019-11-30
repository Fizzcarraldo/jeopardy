import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzerHeaderComponent } from './buzzer-header.component';

describe('BuzzerHeaderComponent', () => {
  let component: BuzzerHeaderComponent;
  let fixture: ComponentFixture<BuzzerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
