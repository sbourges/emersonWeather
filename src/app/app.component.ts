import { Component, ViewChild } from '@angular/core';
import { GeoCoords } from './model/geocoords';
import { WeatherInfoComponent } from './weather-info/weather-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emersonWeather';
  geo! : GeoCoords;

  @ViewChild(WeatherInfoComponent, { static: false })
  private weatherInfoComponent!: WeatherInfoComponent;

  onGeoChange(geo : GeoCoords) {
    console.log("Geo Change:", geo);
    this.geo = geo;
  }

  onGeoMethodChange() {
    console.log("Geo reset to null");
    this.weatherInfoComponent.weather = null as any;
  }
}
