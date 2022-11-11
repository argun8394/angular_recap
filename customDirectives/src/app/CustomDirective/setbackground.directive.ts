import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[setBackground]'
})

export class SetBackgroundDirective implements OnInit {

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#C8E6C9';//best practice değildir burada kullanımı(ngOnInit te best practice intial durum tamamlandığı için)
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }
}
