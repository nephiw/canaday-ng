import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/modal.service';

@Component({
  selector: 'app-interview-modal',
  templateUrl: './interview-modal.component.html'
})
export class InterviewModalComponent implements OnInit {
  private videos: any[] = [
    { name: 'Anthony Hopkins Interview', href: 'https://www.youtube.com/embed/Mz-ydMAUsGQ?rel=0&amp;showinfo=0' },
    { name: 'The Big Interview with Quentin Tarantino', href: 'https://www.youtube.com/embed/03_a5qHhaNw?rel=0&amp;showinfo=0' },
    { name: 'Will Ferrell Interview', href: 'https://www.youtube.com/embed/LNN-7BNdTyY?rel=0&amp;showinfo=0' },
    { name: 'Wedding Crashers Red Carpet', href: 'https://www.youtube.com/embed/WcCulnst54U?rel=0&amp;showinfo=0' },
    { name: 'The Big Interview with Willie Nelson', href: 'https://www.youtube.com/embed/6X8G4Osa994?rel=0&amp;showinfo=0' },
    { name: 'The Brothers Grimm Press Junket', href: 'https://www.youtube.com/embed/8z79uH2WUHI?rel=0&amp;showinfo=0' },
    { name: 'The Big Interview with Benicio Del Toro', href: 'https://www.youtube.com/embed/b3zyYmnk7lo?rel=0&amp;showinfo=0' }
  ];
  private currentIndex: number = 0;
  private maxIndex: number = this.videos.length - 1;
  public currentVideo: { name: string, href: string };

  constructor(private modalService: ModalService) { }

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
    return '#interview-modal';
  }
}
