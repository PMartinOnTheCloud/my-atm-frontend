import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLocationsComponent } from './display-locations.component';

describe('DisplayLocationsComponent', () => {
  let component: DisplayLocationsComponent;
  let fixture: ComponentFixture<DisplayLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
