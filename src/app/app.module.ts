import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { LocationCityComponent } from './location-city/location-city.component';
import { LocationZipComponent } from './location-zip/location-zip.component';
import { LocationGeoComponent } from './location-geo/location-geo.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    LocationCityComponent,
    LocationZipComponent,
    LocationGeoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
