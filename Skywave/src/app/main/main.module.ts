import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TariffComponent } from './tariff/tariff.component';


@NgModule({
  declarations: [MainComponent, TariffComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
