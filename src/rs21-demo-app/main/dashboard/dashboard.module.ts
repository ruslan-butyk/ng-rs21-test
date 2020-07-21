import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { FacebookChartComponent } from './facebook-chart/facebook-chart.component';
import { TwitterChartComponent } from './twitter-chart/twitter-chart.component';
import { CensusChartComponent } from './census-chart/census-chart.component';

@NgModule({
  declarations: [DashboardComponent, FacebookChartComponent, TwitterChartComponent, CensusChartComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class DashboardModule {}
