import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-geo',
  templateUrl: './location-geo.component.html',
  styleUrls: ['./location-geo.component.css']
})
export class LocationGeoComponent implements OnInit {

  locationGeoForm = this.formBuilder.group({
    long: '',
    lat: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmitGeo(): void {
    // Process checkout data here
    this.locationGeoForm.reset();
  }

  ngOnInit(): void {
  }

}
