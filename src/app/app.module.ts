import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChapterAdnanComponent } from './chapter-adnan/chapter-adnan.component';
import { ChapterKhurramComponent } from './chapter-khurram/chapter-khurram.component';
import { ChapterRubabComponent } from './chapter-rubab/chapter-rubab.component';
import { WeclomePageComponent } from './weclome-page/weclome-page.component';
import { WeatherInfoComponent } from './chapter-adnan/weather-info/weather-info.component';
import { WeatherInputComponent } from './chapter-adnan/weather-info/weather-input/weather-input.component';
import { WeatherCardComponent } from './chapter-adnan/weather-info/weather-card/weather-card.component';
import { TemplateDrivenFormComponent } from './chapter-adnan/template-driven-form/template-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WeclomePageComponent,
    ChapterAdnanComponent,
    ChapterKhurramComponent,
    ChapterRubabComponent,
    WeatherInfoComponent,
    WeatherInputComponent,
    WeatherCardComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
