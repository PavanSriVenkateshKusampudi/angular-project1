import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appForm]'
})
export class FormDirective {

  constructor(private el:ElementRef) { }
  @HostListener('login')
  onFormSubmit(){
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if(invalidControl){
      invalidControl.value='enter data';
    }

  }

}
