import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByLetter } from './search-by-letter';

describe('SearchByLetter', () => {
  let component: SearchByLetter;
  let fixture: ComponentFixture<SearchByLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByLetter],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchByLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
