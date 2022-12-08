import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchChosenComponent } from './match-chosen.component';

describe('MatchChosenComponent', () => {
  let component: MatchChosenComponent;
  let fixture: ComponentFixture<MatchChosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchChosenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
