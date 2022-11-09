import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(this.selectedRadioButtonValue)
  }
  @Input('total') all : number =0;//alias name kullanıldığında yani takma ad pas edilmeli
  @Input() free : number = 0;
  @Input() premium : number = 0;

  selectedRadioButtonValue : string = 'All';

  @Output()
  filterRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue)
  }



}
