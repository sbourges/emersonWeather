import { Component, OnInit, Input } from '@angular/core';
import { GeoCoords } from '../model/geocoords';
import { OpenWeatherService } from 'src/app/open-weather.service';
import { WeatherInfo } from '../model/weatherinfo';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  private _geo! : GeoCoords;
  weather : WeatherInfo = new WeatherInfo();

  @Input() 
  get geo(): GeoCoords {
    return this._geo;
  }
  set geo(geo : GeoCoords) {
    this._geo = geo;
    if (geo) this.weather = this.openWeatherService.getWeather(this._geo);
  }

  constructor(private openWeatherService : OpenWeatherService) {}

  ngOnInit(): void {
  }

}
