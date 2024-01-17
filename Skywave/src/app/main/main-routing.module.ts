import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: "home", component: MainComponent
  },
  { 
    path: "tariffList", component: TariffListComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
