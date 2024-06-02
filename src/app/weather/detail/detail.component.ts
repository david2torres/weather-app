import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import { switchMap } from 'rxjs/operators';
import { CHART_TYPE, LINE_CHART_DATA, LINE_CHART_OPTIONS } from 'src/app/shared/constants/detailConstan';
import { lineChartData } from 'src/app/shared/interfaces/detailInterfaces';
import { WeatherService } from 'src/app/shared/services/weatherService/weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public cityName!: string;
  public lineChartData: lineChartData[] = LINE_CHART_DATA; 
  public lineChartLabels: any[] = [];
  public lineChartOptions: ChartOptions = LINE_CHART_OPTIONS;
  public lineChartType: ChartType = CHART_TYPE;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id') as 'TOP' | 'LWX';
          this.cityName = id;
          return this.weatherService.getForecast(id);
        })
      )
      .subscribe((data) => {
        this.lineChartLabels = data.map((d) => d.name);
        this.lineChartData[0].data = data.map((d) => d.temperature);
      });
  }
}
