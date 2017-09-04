import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appScalingText]'
})
export class ScalingTextDirective implements OnInit {
  @Input() public minFontSize: number;
  @Input() public maxFontSize: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.resize();
  }

  @HostListener('window:resize')
  @HostListener('window:orientationchange')
  public resize(): void {
    const width = this.el.nativeElement.clientWidth;
    const fontSize = Math.max(
      Math.min(width / 10, this.maxFontSize),
      this.minFontSize
    );

    this.renderer.setStyle(this.el.nativeElement, 'fontSize', `${ fontSize }px`);
  }
}
