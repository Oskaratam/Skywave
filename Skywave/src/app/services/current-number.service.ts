import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile-interface';
import { Tariff } from '../profile/tariff-interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentNumberService {

  currentProfile !: Profile;
  currentTariff !: Tariff;
  

  constructor( ) { 
    this.currentTariff = {
      data : 1,
      calls : 1,
      sms : 1,
      tariffName : "Pick a plan",
      colorScheme : ['#be164e', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(190,22,78,1) 0%, rgba(255,235,0,1) 100%)'],
      pricePerMonth : 0,
      imageSrc : "../../../assets/tariffIcons/baseForIcons.png"
    };

    this.currentProfile = { 
      phoneNumber: "+098-73-46-432",
      userName: "TestUser1",
      tariffName: "FullGaming",
      profileIsPicked: true 
      }
  }
}
