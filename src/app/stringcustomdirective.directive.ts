import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStringcustomdirective]'
})
export class StringcustomdirectiveDirective implements OnInit {
  @Input () stringvalue="";
 


  constructor(public el:ElementRef) {
    this.el.nativeElement.innerText +=this.stringvalue;
   }

   ngOnInit(){
    this.el.nativeElement.innerText =this.stringvalue;
   }

}
