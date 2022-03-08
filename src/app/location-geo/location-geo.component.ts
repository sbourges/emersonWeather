import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GeoCoords } from '../model/geocoords';

@Component({
  selector: 'app-location-geo',
  templateUrl: './location-geo.component.html',
  styleUrls: ['./location-geo.component.css']
})
export class LocationGeoComponent implements OnInit {
  @Output() geoEvent = new EventEmitter<GeoCoords>();

  locationGeoForm = this.formBuilder.group({
    long: '',
    lat: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onSubmitGeo(): void {
    let newGeo = new GeoCoords(this.locationGeoForm.value.long,this.locationGeoForm.value.lat);
    console.log(newGeo)
    this.geoEvent.emit(newGeo);
  }

  ngOnInit(): void {
  }

}
