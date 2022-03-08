import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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
      this.openWeatherService.getWeather(this._geo, this.handleError.bind(this))
      .subscribe((item : any ) => {
        if (item.main) {
          console.log("item.main", item.main);
          console.log("this", this);
          if (!this.weather) this.weather = new WeatherInfo();
          this.weather.main = item.main;
        }
      });
    }
  }

  constructor(private openWeatherService : OpenWeatherService) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0 || error.status >= 500) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      this.errorMsg = "A servere error occured!";
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      this.errorMsg = error.error.message;
    }
  }

  ngOnInit(): void {
  }

}
