import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TariffComponent } from './tariff/tariff.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';


@NgModule({
  declarations: [MainComponent, TariffComponent, TariffListComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
