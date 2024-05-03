import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'sw-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffComponent implements OnInit, AfterViewInit {
  
  @Input() tariffName !: string;
  @Input() pricePerMonth !: number;
  @Input() data !: number;
  @Input() calls !: number;
  @Input() sms !: number;
  @Input() imageSrc !: string | undefined;
  @Input() colorScheme !: string[] | string;

  @ViewChild('header', { static: true } ) header !: ElementRef;
  @ViewChild('nameDiv', { static: true }) nameDiv !: ElementRef;
  @ViewChildren('coloredText') coloredTexts !: QueryList<ElementRef>;


  ngOnInit(): void {
    this.header.nativeElement.style.backgroundColor = this.colorScheme[0];
    this.nameDiv.nativeElement.style.background = this.colorScheme[1];
  }

  ngAfterViewInit(): void {
   this.coloredTexts.forEach(text => text.nativeElement.style.color = this.colorScheme[0])
  }



}
