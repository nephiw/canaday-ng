import { ModalService } from '../../core/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html'
})
export class ImageModalComponent implements OnInit {
  private videos: any[] = [
    { name: 'Black History Month Image', href: 'https://www.youtube.com/embed/FVaf6X2DBkM?rel=0&amp;showinfo=0' },
    { name: 'AXS TV On Air Image', href: 'https://www.youtube.com/embed/y33ToUI6g6k?rel=0&amp;showinfo=0' },
    { name: 'April Concert Image', href: 'https://www.youtube.com/embed/vzEnuGWHxfk?rel=0&amp;showinfo=0' },
    { name: 'Martin Lawrence Presents First Amendment Standup', href: 'https://www.youtube.com/embed/ktw7WFChMOU?rel=0&amp;showinfo=0' },
    { name: 'Starz Year Ender Image', href: 'https://www.youtube.com/embed/hxwQoGQtOVQ?rel=0&amp;showinfo=0' },
    { name: 'The Big Interview Image', href: 'https://www.youtube.com/embed/IceuWMcN9pU?rel=0&amp;showinfo=0' },
    { name: 'AXS Comedy Image', href: 'https://www.youtube.com/embed/OalS-HY4zFk?rel=0&amp;showinfo=0' },
    { name: 'July Concert Image', href: 'https://www.youtube.com/embed/3yF3kV9jRBo?rel=0&amp;showinfo=0' },
    { name: 'Gotham Comedy Live Image', href: 'https://www.youtube.com/embed/sVR14JQFd7g?rel=0&amp;showinfo=0' }
  ];
  private currentIndex: number = 0;
  private maxIndex: number = this.videos.length - 1;

  public currentVideo: { name: string, href: string };

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
