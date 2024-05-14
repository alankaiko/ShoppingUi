import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {InstitucionalRoutingModule} from "./institucional-routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    InstitucionalRoutingModule
  ]
})
export class InstitucionalModule {
}
