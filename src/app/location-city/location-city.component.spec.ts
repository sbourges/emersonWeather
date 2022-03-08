import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationCityComponent } from './location-city.component';
import { FormBuilder } from '@angular/forms';

describe('LocationCityComponent', () => {
  let component: LocationCityComponent;
  let fixture: ComponentFixture<LocationCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
