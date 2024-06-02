import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Period {
  name: string;
  temperature: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrls: { [key in 'TOP' | 'LWX']: string } = {
    TOP: 'https://api.weather.gov/gridpoints/TOP/31,80/forecast',
    LWX: 'https://api.weather.gov/gridpoints/LWX/31,80/forecast',
  };

  constructor(private http: HttpClient) {}

  getForecast(id: 'TOP' | 'LWX'): Observable<Period[]> {
    const url = this.apiUrls[id];
    return this.http.get<any>(url).pipe(
      map((response) =>
        response.properties.periods.map((period: any) => ({
          name: period.name,
          temperature: period.temperature,
        }))
      )
    );
  }
}