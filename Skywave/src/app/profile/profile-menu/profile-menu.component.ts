import { Component } from '@angular/core';
import { Profile } from '../profile-interface';
import { CurrentNumberService } from 'src/app/services/current-number.service';

@Component({
  selector: 'sw-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {

  constructor( public currNumber : CurrentNumberService) {
   }

  profiles : Profile[] = [
    { phoneNumber: "+098-73-46-432",
      userName: "TestUser1",
      tariffName: "FullGaming",
      profileIsPicked: true 
    },
    {
      phoneNumber: "+795-031-142",
      userName: "TestUser2",
      tariffName: "",
      profileIsPicked: false
    }
  ]

  pickNumber(profile : any) {
    this.profiles.forEach(profile => {
      profile.profileIsPicked = false;
    })
    profile.profileIsPicked = true;
    this.currNumber.currentProfile = profile;
  }

 
}
