import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCupMatchesComponent } from './word-cup-matches.component';

describe('WordCupMatchesComponent', () => {
  let component: WordCupMatchesComponent;
  let fixture: ComponentFixture<WordCupMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCupMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCupMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
