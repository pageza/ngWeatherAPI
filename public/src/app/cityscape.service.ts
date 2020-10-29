import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityscapeService {

  constructor(private _http: HttpClient) { }
  getCityScape(city) {
    const headers = new HttpHeaders()
      .set('Authorization', '563492ad6f917000010000011214f03d23b34e2ab1d3eacc52ec9635');
    return this._http.get('https://api.pexels.com/v1/search?query=' + city, {headers});
  }
}
