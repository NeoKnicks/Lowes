import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  @Input() mouseOverColor : string = "red";
  @Input() mouseLeaveColor : string = "transparent";
  constructor(private elementRef : ElementRef, private renderer : Renderer2) { 

  }
  
  ngOnInit() {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green'); */
  }

  @HostListener('mouseenter') mouseover(eventData : Event) {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green'); */
    console.log(this.mouseover);
    this.backgroundColor = this.mouseOverColor;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event) {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent'); */
    this.backgroundColor = this.mouseLeaveColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor : string = "green";
}
