import { Component } from '@angular/core';
import { ModalService } from '../../core/modal.service';
import { PortfolioModalItem } from '../portfolio-modal/portfolio-modal-item';

@Component({
  selector: 'app-marketing-modal',
  templateUrl: './marketing-modal.component.html'
})
export class MarketingModalComponent {
  public videos: PortfolioModalItem[] = [
    { name: 'Liberty Analyst Marketing Reel', href: 'https://www.youtube.com/embed/6PrbxuanDOo?rel=0&amp;showinfo=0', type: 'Marketing' },
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

  public close() {
    this.modalService.close();
  }

  public static get id(): string {
    return '#marketing-modal';
  }
}
