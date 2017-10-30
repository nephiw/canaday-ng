import { ModalService } from '../../core/modal.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioModalItem } from '../portfolio-modal/portfolio-modal-item';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html'
})
export class ImageModalComponent implements OnInit {
  private videos: PortfolioModalItem[] = [
    { name: 'Black History Month Image', href: 'https://www.youtube.com/embed/FVaf6X2DBkM?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'AXS TV On Air Image', href: 'https://www.youtube.com/embed/y33ToUI6g6k?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'April Concert Image', href: 'https://www.youtube.com/embed/vzEnuGWHxfk?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'Martin Lawrence Presents First Amendment Standup', href: 'https://www.youtube.com/embed/ktw7WFChMOU?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'Starz Year Ender Image', href: 'https://www.youtube.com/embed/hxwQoGQtOVQ?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'The Big Interview Image', href: 'https://www.youtube.com/embed/IceuWMcN9pU?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'AXS Comedy Image', href: 'https://www.youtube.com/embed/OalS-HY4zFk?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'July Concert Image', href: 'https://www.youtube.com/embed/3yF3kV9jRBo?rel=0&amp;showinfo=0', type: 'Image' },
    { name: 'Gotham Comedy Live Image', href: 'https://www.youtube.com/embed/sVR14JQFd7g?rel=0&amp;showinfo=0', type: 'Image' }
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
    return '#image-modal';
  }
}
