import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';


import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponent } from './main.component';
import { MapComponent } from './map/map.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


@NgModule({
  declarations: [
    MainComponent,
    MapComponent,
    ControlPanelComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    DashboardModule
  ]
})
export class MainModule {}
