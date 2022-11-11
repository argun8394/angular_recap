import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1948A')//direkt olarak backgroundu değiştiriyoruz
    this.renderer.addClass(this.element.nativeElement, 'container')//burada class ekleme yaparak manipüle ediyoruz
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example div')//div in üstüne geldiğimizde title çıkar hover şeklinde
  }

}
