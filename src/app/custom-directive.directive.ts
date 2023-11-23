import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

@Input () string=""

  constructor(public el:ElementRef) {
    console.log(this.el);
    el.nativeElement.style.color="red";
  
   
    
   }
   ngOnInit(){
    this.el.nativeElement.align="center"
    
  this.el.nativeElement.innerText +=this.string;

  
   }

}
