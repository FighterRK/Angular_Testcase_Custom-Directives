import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {



  constructor( private ele : ElementRef) { 
    this.ele.nativeElement.innerText = 'Places I Visited';

  }

}
