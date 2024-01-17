import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile-interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentNumberService {

  constructor() { }


  currentProfile : Profile = { 
  phoneNumber: "+098-73-46-432",
  userName: "TestUser1",
  tariffName: "FullGaming",
  profileIsPicked: true 
  }
}
