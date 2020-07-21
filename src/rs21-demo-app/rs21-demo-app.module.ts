import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Rs21DemoAppRoutingModule } from './rs21-demo-app-routing.module';
import { Rs21DemoAppComponent } from './rs21-demo-app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    Rs21DemoAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Rs21DemoAppRoutingModule,
    MainModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [Rs21DemoAppComponent]
})
export class Rs21DemoAppModule { }
