import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})

export class WeatherInputComponent {
  constructor() { }
  locationName: string = 'Lahore';
  @Output() newLocationItemFromChild = new EventEmitter<string>();
  
  onSubmit(){
    this.newLocationItemFromChild.emit(this.locationName);
  }
}
