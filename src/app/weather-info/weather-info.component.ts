import { Component, OnInit, Input } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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
  errorMsg : String = "";

  @Input() 
  get geo(): GeoCoords {
    return this._geo;
  }
  set geo(geo : GeoCoords) {
    this._geo = geo;
    this.errorMsg = "";
    if (geo) {
      this.openWeatherService.getWeather(this._geo)
      .subscribe((item : WeatherInfo) => {
          this.weather = item;
      });
    }
  }

  constructor(private openWeatherService : OpenWeatherService) {}

  ngOnInit(): void {
  }

}
