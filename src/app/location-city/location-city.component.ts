import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-location-city',
  templateUrl: './location-city.component.html',
  styleUrls: ['./location-city.component.css']
})
export class LocationCityComponent implements OnInit {

  locationCityForm = this.formBuilder.group({
    city: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmitCity(): void {
    // Process checkout data here
    this.locationCityForm.reset();
  }

  ngOnInit(): void {
  }

}
