import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'sw-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit, AfterViewInit {
  
  @Input() tariffName !: string;
  @Input() pricePerMonth !: string;
  @Input() data !: number;
  @Input() calls !: number;
  @Input() sms !: number;
  @Input() imageSrc !: string;
  @Input() colorScheme !: string[];

  @ViewChild('header', { static: true } ) header !: ElementRef;
  @ViewChild('nameDiv', { static: true }) nameDiv !: ElementRef;
  @ViewChildren('coloredText') coloredTexts !: QueryList<ElementRef>;


  ngOnInit(): void {
    this.header.nativeElement.style.backgroundColor = this.colorScheme[0];
    this.nameDiv.nativeElement.style.background = this.colorScheme[1];
    console.log(this.coloredTexts)
  }

  ngAfterViewInit(): void {
   this.coloredTexts.forEach(text => text.nativeElement.style.color = this.colorScheme[0])
  }



}
