import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom// ViewEncapsulation ile global css ten kullanılan class lar üzerinde manipülasyonlar yapabiliyoruz tanımlamalar

})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
