import { Component, OnChanges, Input } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnChanges {
  
  @Input() locationInputFromParent: string = '';
  weatherInfo: any = {};
  constructor(private weatherService: WeatherService) { }

  ngOnChanges() {
    this.weatherService.getWeatherInfo(this.locationInputFromParent).subscribe(response => {
      this.weatherInfo = response;
    });
  }
}
