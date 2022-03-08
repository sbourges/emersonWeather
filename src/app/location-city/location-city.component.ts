import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OpenWeatherService } from 'src/app/open-weather.service';
import { GeoCoords } from '../model/geocoords';

@Component({
  selector: 'app-location-city',
  templateUrl: './location-city.component.html',
  styleUrls: ['./location-city.component.css']
})
export class LocationCityComponent implements OnInit {
  @Output() geoEvent = new EventEmitter<GeoCoords>();

  locationCityForm = this.formBuilder.group({
    city: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private openWeatherService : OpenWeatherService
  ) {}

  onSubmitCity(): void {
      console.log(this.locationCityForm.value.city);
      this.openWeatherService.getGeo("city", this.locationCityForm.value.city)
      .subscribe((item : any) => {
          let newGeo = new GeoCoords(item[0].lon, item[0].lat);
          console.log(newGeo)
          this.geoEvent.emit(newGeo);
      });
  }

  ngOnInit(): void {
  }

}
