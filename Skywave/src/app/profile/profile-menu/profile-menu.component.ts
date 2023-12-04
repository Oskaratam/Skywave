import { Component } from '@angular/core';
import { Profile } from '../profile-interface';

@Component({
  selector: 'sw-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {

  profiles : Profile[] = [
    { phoneNumber: "+098-73-46-432",
      userName: "TestUser1",
      profileIsPicked: true 
    },
    {
      phoneNumber: "+795-031-142-123",
      userName: "TestUser2",
      profileIsPicked: false
    }
  ]

  pickNumber(profile : any) {
    this.profiles.forEach(profile => {
      profile.profileIsPicked = false;
    })
    profile.profileIsPicked = true;

  }
}
