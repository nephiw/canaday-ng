import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/modal.service';
import { PortfolioModalItem } from '../portfolio-modal/portfolio-modal-item';

@Component({
  selector: 'app-promo-modal',
  templateUrl: './promo-modal.component.html'
})
export class PromoModalComponent implements OnInit {
  private videos: PortfolioModalItem[] = [
    // Movies:
    { name: 'Dogtown and Z Boys', href: 'https://www.youtube.com/embed/HccEDpgNIj0?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Reign Over Me', href: 'https://www.youtube.com/embed/10A6Vw0DP3E?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Airplane', href: 'https://www.youtube.com/embed/AK0ehe6lm4g?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'No Country For Old Men', href: 'https://www.youtube.com/embed/LQ2Z4wuqHwU?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Less Than Zero', href: 'https://www.youtube.com/embed/KaG0XddeX_8?rel=0&amp;showinfo=0', type: 'Promo' },
    // Concerts:
    { name: 'The Family Values Tour', href: 'https://www.youtube.com/embed/71902sqHxWM?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Pitbull: New Years Eve', href: 'https://www.youtube.com/embed/RTXLwijwc3Q?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Red Rocks Sizzle Reel', href: 'https://www.youtube.com/embed/qKs9t-DSG60?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Aerosmith: Live at Donington', href: 'https://www.youtube.com/embed/c4LhK3suj30?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Rick Ross', href: 'https://www.youtube.com/embed/Jmc2ZprVv1w?rel=0&amp;showinfo=0', type: 'Promo' },
    // Sports:
    { name: 'Legacy Fighting Championship', href: 'https://www.youtube.com/embed/Xc8ufcXRKoo?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'College Basketball Invitational', href: 'https://www.youtube.com/embed/ljG0F69WWGE?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'The Monon Bell Football Game', href: 'https://www.youtube.com/embed/0cKIjE3FW3s?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'The Little 500 Cycling Competition', href: 'https://www.youtube.com/embed/9l0An9-aePo?rel=0&amp;showinfo=0', type: 'Promo' },
    // { name: 'Maximum Fighting Championship', href: 'https://www.youtube.com/embed/9T5JG-S8dtY?rel=0&amp;showinfo=0', type: 'Promo' },
    // News:
    { name: 'Dan Rather Reports News Image', href: 'https://www.youtube.com/embed/0S3dV4pPAaY?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Dan Rather Reports Episode 803', href: 'https://www.youtube.com/embed/4a4NBoKwrdA?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: 'Dan Rather Reports Self Image', href: 'https://www.youtube.com/embed/BW-2BQG4fOA?rel=0&amp;showinfo=0', type: 'Promo' },
    { name: '9-11 Remembers Marathon', href: 'https://www.youtube.com/embed/86N0ZTGkY5U?rel=0&amp;showinfo=0', type: 'Promo' }
  ];
  private currentIndex: number = 0;
  private maxIndex: number = this.videos.length - 1;

  public currentVideo: PortfolioModalItem;

  constructor(private modalService: ModalService, ) { }

  public ngOnInit(): void {
    this.currentVideo = this.videos[this.currentIndex];
  }

  public next(): void {
    this.currentIndex = (1 + this.currentIndex) % this.maxIndex;
    this.currentVideo = this.videos[this.currentIndex];
  }

  public previous(): void {
    this.currentIndex = (this.currentIndex - 1);
    if (this.currentIndex < 0) {
      this.currentIndex = this.maxIndex;
    }
    this.currentVideo = this.videos[this.currentIndex];
  }

  public close(): void {
    this.modalService.close();
  }
  
  public static get id(): string {
    return '#promo-modal';
  }
}
