import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slide } from './router-animations';
import { HttpClient } from '@angular/common/http';
import { Tariff } from './profile/tariff-interface';
import { DatabaseService } from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slide
  ]
})
export class AppComponent implements OnInit {
  title : string = 'Skywave';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor( private database : DatabaseService) {
  }

  ngOnInit(): void {
    this.database.getAllTariffPlans();
  }
}
