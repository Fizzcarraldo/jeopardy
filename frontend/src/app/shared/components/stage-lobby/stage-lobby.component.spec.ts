import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageLobbyComponent } from './stage-lobby.component';

describe('StageLobbyComponent', () => {
  let component: StageLobbyComponent;
  let fixture: ComponentFixture<StageLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
