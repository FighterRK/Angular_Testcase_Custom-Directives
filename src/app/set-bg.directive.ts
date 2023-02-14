import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBg]'
})
export class SetBgDirective implements OnInit {

  constructor(private element : ElementRef)  {
    console.log(element);
   // element.nativeElement.style.backgroundColor = 'red'
    
    
   }
   @HostListener('click') onClick(){
    this.element.nativeElement.style.color = 'white';
   }


   @HostBinding ('class') className ='prime';

   ngOnInit(): void {
  //      this.element.nativeElement.classList.add("bg-warning")
    }

}
