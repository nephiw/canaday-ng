import { 
  Component, 
  OnInit, 
  ElementRef, 
  Inject, 
  HostListener, 
  AfterViewInit 
} from '@angular/core';
import { WINDOW } from '../../core/windowToken.module';
import { 
  trigger, 
  state, 
  transition, 
  animate, 
  style 
} from '@angular/animations';
import gumshoe from 'gumshoe/dist/js/gumshoe';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('opaque', [
      state('no-background', style({
        backgroundColor: 'rgba(51, 51, 51, 0)',
        opacity: 1
      })),
      state('invisible', style({
        backgroundColor: 'rgba(51, 51, 51, 0)',
        opacity: 0
      })),
      state('opaque-background', style({
        backgroundColor: 'rgba(51, 51, 51, 1)',
        opacity: 1
      })),
      transition('* => *', animate('500ms ease-out'))
    ])
  ]
})
export class NavigationComponent implements OnInit, AfterViewInit {
  private el: HTMLElement;
  public headerState: string = 'active';

  constructor(
    private elementRef: ElementRef,
    @Inject(WINDOW) private _window: any) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.setDimensions();
  }

  @HostListener('window:scroll')
  @HostListener('window:orientationchange')
  private setDimensions() {
    const windowHeight = this._window.innerHeight;
    const windowWidth = this._window.innerWidth;
    const y = this._window.scrollY;

    if ((y > windowHeight * .20) && (y < windowHeight) && (windowWidth > 768)) {
      this.headerState = 'invisible';
    } else {
      if (y < windowHeight * .20) {
        this.headerState = 'no-background';
      } else {
        this.headerState = 'opaque-background';
      }
    };
  }

  public ngAfterViewInit(): void {
    gumshoe.init({
      selector: ".nav a",
      selectorHeader: "#nav-wrap"
    });
  }
}
