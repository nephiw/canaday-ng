import { WINDOW } from '../core/windowToken.module';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  ElementRef,
  Inject,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public windowHeight: number;
  public windowWidth: number;
  private el: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    @Inject(WINDOW) private _window: Window, 
    @Inject(DOCUMENT) private document: Document)
  {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.setDimensions();
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:orientationchange', ['$event'])
  private setDimensions() {
    this.windowHeight = this._window.innerHeight;
    this.windowWidth = this._window.innerWidth;
    // Have to set the body width to properly resize when body strinks 
    // which happens when switching from landscape to portrait
    this.document.body.style.width = `${ this.windowWidth }px`;
  }
}
