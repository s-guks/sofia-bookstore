import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFilterComponent } from './sort-filter.component';

describe('SortFilterComponent', () => {
  let component: SortFilterComponent;
  let fixture: ComponentFixture<SortFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortFilterComponent]
    });
    fixture = TestBed.createComponent(SortFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
