import {
  Component,
  ViewEncapsulation,
  NgModule
} from '@angular/core';

import {
  routing,
  appRoutingProviders
} from '../routes/app.routes';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {RioHelloPageComponent} from '../pages';
import {BrowserModule} from '@angular/platform-browser';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

@Component({
  selector: 'rio-app',
  // Global styles imported in the app component.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/index.css') ],
  template: require('./app.html'),
})
export class RioAppComponent {};

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing,
    NKDatetimeModule
  ],
  declarations: [
    RioAppComponent,
    RioHelloPageComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [RioAppComponent]
})
export class RioAppModule {};
