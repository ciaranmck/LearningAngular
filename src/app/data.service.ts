import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

  getCountry(countryId) {
    return this.http.get('https://restcountries.eu/rest/v2/name/'+countryId)
  }
}
