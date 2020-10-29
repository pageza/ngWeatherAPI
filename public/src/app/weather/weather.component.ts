import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherService} from '../weather.service';
import { CityscapeService } from '../cityscape.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: any;
  weatherData: any;
  cityscape: any;
  constructor(private _route: ActivatedRoute, private _weather: WeatherService, private _cityScape: CityscapeService ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.city = params.city;
      this.checkWeather(this.city);
      this.getCityscape(this.city);
    });

  }
  randomImage(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  checkWeather(city) {
    const observable = this._weather.getWeather(city);
    observable.subscribe( data => this.weatherData = data);
  }
  getCityscape(city) {
    const observable = this._cityScape.getCityScape(city);
    observable.subscribe( data => this.cityscape = data);
  }
}
