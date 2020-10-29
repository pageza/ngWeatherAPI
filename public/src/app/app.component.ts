import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities: any = [
    {city: 'Seattle', state: 'Washington'},
    {city: 'San Jose', state: 'California'},
    {city: 'Burbank', state: 'California'},
    {city: 'Dallas', state: 'Texas'},
    {city: 'Washington D.C.', state: 'Maryland'},
    {city: 'Chicago', state: 'Illinois'}
  ];
}
