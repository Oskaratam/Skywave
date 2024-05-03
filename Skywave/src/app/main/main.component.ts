import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentNumberService } from '../services/current-number.service';

@Component({
  selector: 'sw-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor( private currentNumber : CurrentNumberService) {
  }

  currentTariff = this.currentNumber.currentTariff;
  
}
