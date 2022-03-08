import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { GeoCoords } from './model/geocoords';
import { WeatherInfo } from './model/weatherinfo';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor() { }

  getGeo(field:String, value:String) {
    if (field === "city") field="p";
    let url = `http://api.openweathermap.org/geo/1.0/direct?${field}=${value},US&limit=3&appid=${environment.openweathertoken}`;
    console.log(url);
    return [
        {
          "name": "London",
          "local_names": {
            "af": "Londen",
            "ar": "لندن",
            "ascii": "London",
            "az": "London",
            "bg": "Лондон",
            "ca": "Londres",
            "da": "London",
            "de": "London",
            "el": "Λονδίνο",
            "en": "London",
            "eu": "Londres",
            "fa": "لندن",
            "feature_name": "London",
            "fi": "Lontoo",
            "fr": "Londres",
            "gl": "Londres",
            "he": "לונדון",
            "hi": "लंदन",
            "hr": "London",
            "hu": "London",
            "id": "London",
            "it": "Londra",
            "ja": "ロンドン",
            "la": "Londinium",
            "lt": "Londonas",
            "mk": "Лондон",
            "nl": "Londen",
            "no": "London",
            "pl": "Londyn",
            "pt": "Londres",
            "ro": "Londra",
            "ru": "Лондон",
            "sk": "Londýn",
            "sl": "London",
            "sr": "Лондон",
            "th": "ลอนดอน",
            "tr": "Londra",
            "vi": "Luân Đôn",
            "zu": "ILondon"
          },
          "lat": 51.5085,
          "lon": -0.1257,
          "country": "GB"
        },
        {
          "name": "London",
          "local_names": {
            "ar": "لندن",
            "ascii": "London",
            "bg": "Лондон",
            "de": "London",
            "en": "London",
            "fa": "لندن، انتاریو",
            "feature_name": "London",
            "fi": "London",
            "fr": "London",
            "he": "לונדון",
            "ja": "ロンドン",
            "lt": "Londonas",
            "nl": "London",
            "pl": "London",
            "pt": "London",
            "ru": "Лондон",
            "sr": "Лондон"
          },
          "lat": 42.9834,
          "lon": -81.233,
          "country": "CA"
        },
        {
          "name": "London",
          "local_names": {
            "ar": "لندن",
            "ascii": "London",
            "en": "London",
            "fa": "لندن، اوهایو",
            "feature_name": "London",
            "sr": "Ландон"
          },
          "lat": 39.8865,
          "lon": -83.4483,
          "country": "US",
          "state": "OH"
        },
        {
          "name": "London",
          "local_names": {
            "ar": "لندن",
            "ascii": "London",
            "en": "London",
            "fa": "لندن، کنتاکی",
            "feature_name": "London",
            "sr": "Ландон"
          },
          "lat": 37.129,
          "lon": -84.0833,
          "country": "US",
          "state": "KY"
        },
        {
          "name": "London",
          "local_names": {
            "ascii": "London",
            "ca": "Londres",
            "en": "London",
            "feature_name": "London"
          },
          "lat": 36.4761,
          "lon": -119.4432,
          "country": "US",
          "state": "CA"
        }
      ]
  }

  getWeather(geo : GeoCoords) : any {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.long}&unit=imperial&appid=${environment.openweathertoken}`;
    console.log(url);
    return {
      "coord": {
        "lon": -122.08,
        "lat": 37.39
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 78.3,
        "feels_like": 79.6,
        "temp_min": 62,
        "temp_max": 85.4,
        "pressure": 1023,
        "humidity": 100
      },
      "visibility": 16093,
      "wind": {
        "speed": 1.5,
        "deg": 350
      },
      "clouds": {
        "all": 1
      },
      "dt": 1560350645,
      "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
      },
      "timezone": -25200,
      "id": 420006353,
      "name": "Mountain View",
      "cod": 200
      }                         
  }
}
