import { Component } from '@angular/core';
import { GeoCoords } from './model/geocoords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emersonWeather';
  geo! : GeoCoords;

  onGeoChange(geo : GeoCoords) {
    console.log("Geo Change:", geo);
    this.geo = geo;
  }
}
