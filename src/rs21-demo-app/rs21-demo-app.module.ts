import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Rs21DemoAppRoutingModule } from './rs21-demo-app-routing.module';
import { Rs21DemoAppComponent } from './rs21-demo-app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    Rs21DemoAppComponent
  ],
  imports: [
    BrowserModule,
    Rs21DemoAppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [Rs21DemoAppComponent]
})
export class Rs21DemoAppModule { }
