import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGeoComponent } from './location-geo.component';

describe('LocationGeoComponent', () => {
  let component: LocationGeoComponent;
  let fixture: ComponentFixture<LocationGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationGeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
