import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: false,
})
export class BackgroundColorDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
