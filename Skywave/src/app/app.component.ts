import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slide } from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slide
  ]
})
export class AppComponent {
  title = 'Skywave';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
