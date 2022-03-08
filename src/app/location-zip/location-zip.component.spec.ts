import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationZipComponent } from './location-zip.component';

describe('LocationZipComponent', () => {
  let component: LocationZipComponent;
  let fixture: ComponentFixture<LocationZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
