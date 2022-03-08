import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-location-zip',
  templateUrl: './location-zip.component.html',
  styleUrls: ['./location-zip.component.css']
})
export class LocationZipComponent implements OnInit {

  locationZipForm = this.formBuilder.group({
    zip: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  onSubmitZip(): void {
    let url = `http://api.openweathermap.org/geo/1.0/direct?zip=${this.locationZipForm.value.zip},US&limit=3&appid=${environment.openweathertoken}`;
    //let res = this.http.get(url);
    console.log(url);
  }


  ngOnInit(): void {
  }

}
