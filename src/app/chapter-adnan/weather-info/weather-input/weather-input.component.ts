import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})

export class WeatherInputComponent {
  constructor() { }

  @Output() newLocationItemFromChild = new EventEmitter<string>();
  
  submitWeatherLocation(value: string){
    this.newLocationItemFromChild.emit(value);
  }
}
