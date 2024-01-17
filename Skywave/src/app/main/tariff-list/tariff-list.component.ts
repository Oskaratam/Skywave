import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  ngOnInit(): void {
    console.log("HHHHHHHHHHHHHHHHH")
  }

  tariffs : {}[] = [{}, {}, {}, {}]
  
}
