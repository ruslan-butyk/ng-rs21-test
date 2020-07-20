import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

@NgModule({
  declarations: [MainComponent, MapComponent, DashboardComponent, ControlPanelComponent],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule {

}
