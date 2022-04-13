import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent {

  constructor() { }
  locationName: string = '';

  receiveLocationItemFromChild(locationInput: any){
    this.locationName = locationInput
  }
}
