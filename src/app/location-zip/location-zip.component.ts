import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';
import { GeoCoords } from '../model/geocoords';

@Component({
  selector: 'app-location-zip',
  templateUrl: './location-zip.component.html',
  styleUrls: ['./location-zip.component.css']
})
export class LocationZipComponent implements OnInit {
 @Output() geo = new EventEmitter<GeoCoords>();
  locationZipForm = this.formBuilder.group({
    zip: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private openWeatherService: OpenWeatherService
  ) {}

  onSubmitZip(): void {
    this.openWeatherService.getGeo('zip', this.locationZipForm.value.zip);
  }


  ngOnInit(): void {
  }

}
