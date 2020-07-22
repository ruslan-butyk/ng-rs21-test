import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponent } from './main.component';
import { MapComponent } from './map/map.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TwitterRestService } from './service/twitter-rest.service';
import { FacebookFiltersComponent } from './control-panel/facebook-filters/facebook-filters.component';
import { TwitterFiltersComponent } from './control-panel/twitter-filters/twitter-filters.component';
import { CensusFiltersComponent } from './control-panel/census-filters/census-filters.component';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    MainComponent,
    MapComponent,
    ControlPanelComponent,
    FacebookFiltersComponent,
    TwitterFiltersComponent,
    CensusFiltersComponent
  ],
  providers: [TwitterRestService],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    DashboardModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox.accessToken
    })
  ]
})
export class MainModule {}
