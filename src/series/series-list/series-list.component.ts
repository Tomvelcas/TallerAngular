import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
    
    });
  }

  getPromedioSeasons(): number {
    let sum = 0;
    this.series.forEach(serie => {
      sum += serie.seasons;
    });
    return sum / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
