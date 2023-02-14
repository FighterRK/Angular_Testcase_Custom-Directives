import { Directive , ElementRef , Input ,OnInit} from '@angular/core';

@Directive({
  selector: '[appBodyDir]'
})
export class BodyDirDirective implements OnInit {

  @Input() imageBanner = "../../../assets/images/banner.jpg";

 
 

  constructor(private item : ElementRef) { 
    item.nativeElement.style.color = '#87CEEB'
    

    
  }

  ngOnInit(): void {
    this.item.nativeElement.classList = 'banner';
    
     
     
     
  }

}
