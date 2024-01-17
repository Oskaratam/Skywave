import { Component } from '@angular/core';
import { CurrentNumberService } from '../services/current-number.service';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public currProfile : CurrentNumberService) {

  }
}
