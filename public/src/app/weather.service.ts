import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = '24cfc0cb5180470e717b91a488e594df';

  constructor(private _http: HttpClient) { }

  getWeather(city) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + this.API_KEY);
  }

}
