import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private element : ElementRef) { 
    console.log(this.element);
    


   
  }

  @HostBinding ('class') 
  className = 'navbar-main';

  @HostListener('click') onClick(){
    this.element.nativeElement.style.color = 'green';
  
   }


  

}



