import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'sw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  [key: string]: any;

  currentIcon : string = 'homeIcon';

  @ViewChildren('homeIcon') homeIcon !: QueryList<any>;
  @ViewChildren('servicesIcon') servicesIcon !: QueryList<any>;
  @ViewChildren('historyIcon') historyIcon !: QueryList<any>;
  @ViewChildren('profileIcon') profileIcon !: QueryList<any>;


  activateIcon( iconName : string) {
    this.currentIcon = iconName;
  //   const iconList = this[iconName];
  //   iconList.forEach((icon: any)  => {
  //     icon.nativeElement.classList.add("activatedIcon");
  //   });
  }
}
