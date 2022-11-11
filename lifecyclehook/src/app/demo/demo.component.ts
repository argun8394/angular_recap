import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value : string = "proacademy";

  constructor() {
    console.log("Constructor called");//demo component i her initial olduğunda constructor çağrılır
    //console.log(this.value)//updated olmadan önceki haldedir
  }

  ngOnChanges(changes: SimpleChanges){//ilk çağrılan hook tur
    console.log("ngOnChanges called")
    console.log(changes)//firstchange : true(birden fazla döndüğünde burada true false a döner ve önceki değeri de gösterir) yani ilk değişiklik yapılmış ve burada boş string i döner bize

  }

  ngOnInit(): void {
    console.log("ngOnInit called")
    //console.log(this.value)//updated halde ve boş string döner
  }

  ngDoCheck(){//ngDoCheck ilk değişiklik anında döner ve değer değiştirmeden submit tıklaması yapılırsa sadece ngDoCheck döner ngOnChanges çağrılmaz değer değişikliği olmaması durumunda
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentchecked called");
  }

  ngAfterViewInit(){//bir defa çağrılır
    console.log("ngAfterViewInit called");
  }


  ngAfterViewChecked(){// her değişiklik sonrası çağrılır
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called")
  }

}
