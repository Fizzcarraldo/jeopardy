import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRepresentationComponent } from './player-representation.component';

describe('PlayerRepresentationComponent', () => {
  let component: PlayerRepresentationComponent;
  let fixture: ComponentFixture<PlayerRepresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRepresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
