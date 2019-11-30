import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzerComponent } from './buzzer.component';

describe('BuzzerComponent', () => {
  let component: BuzzerComponent;
  let fixture: ComponentFixture<BuzzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
