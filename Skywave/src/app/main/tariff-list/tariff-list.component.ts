import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tariff } from 'src/app/profile/tariff-interface';
import { CurrentNumberService } from 'src/app/services/current-number.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'sw-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffListComponent implements OnInit{

  constructor( private database : DatabaseService, private currentTariff : CurrentNumberService, private router : Router ) {

  }

  ngOnInit(): void {
    this.database.getAllTariffPlans();
    this.tariffs = this.database.allTariffPlans;
  }

  tariffs !: Tariff[];
  
  trackTariffs (index : number, tariff : any) {
    return tariff.tariffName
  }

  connectNewTariffPlan( pickedTariff : Tariff) {
    this.currentTariff.currentTariff = pickedTariff;
    this.router.navigate(['/home']);
  }


}
