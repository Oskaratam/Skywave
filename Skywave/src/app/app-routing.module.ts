import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TariffListComponent } from './main/tariff-list/tariff-list.component';

const routes: Routes = [
  {
    path: "home", component: MainComponent
  },
  {
    path: "profile", loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule), data: {animation: "bottomSlide"}
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
