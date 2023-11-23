import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
 
  
  constructor(public el:ElementRef) { 

  }


  @HostListener('mouseenter') onMouseenter(){
    this.highlight('#ADD8E6')
    
  }

@HostListener('mouseleave') onMouseLeave(){
this.highlight('')
}
  public highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;

  }

 
}
