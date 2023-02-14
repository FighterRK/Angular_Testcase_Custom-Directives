import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {


  @HostListener('click') onClick(){
    this.i.nativeElement.style.backgroundColor = 'yellow';
    this.i.nativeElement.style.color = 'black';
    this.i.nativeElement.style.border = '2px solid red';
    this.i.nativeElement.innerHTML = 'You Will Be Redirected Soon'
    

    
  }

  constructor(private i : ElementRef) { 
    console.log(this.i);
    

  }

}
