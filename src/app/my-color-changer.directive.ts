import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[myColorChanger]"
})
export class MyColorChangerDirective implements AfterViewInit {
  @Input() myColor: string;
  constructor(private elRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.myColor;
  }
}
