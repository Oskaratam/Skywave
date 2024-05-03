import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tariff } from '../profile/tariff-interface';
import { Subscription } from 'rxjs';
import { CurrentNumberService } from './current-number.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  allTariffPlans !: Tariff [];
  tariffsSubscription !: Subscription;

  constructor( private http : HttpClient, private currentPlan : CurrentNumberService) { }

   getAllTariffPlans() {
    this.tariffsSubscription = this.http.get<Tariff[]>("/api/tariffs").subscribe(data => {this.allTariffPlans = data;
      this.allTariffPlans = this.allTariffPlans.filter(plan => plan.tariffName != this.currentPlan.currentTariff.tariffName)
      this.allTariffPlans = this.allTariffPlans.map(plan => {
        plan.colorScheme = plan.colorScheme.split('!')
        return plan;
      })
   })
  }

 
}
