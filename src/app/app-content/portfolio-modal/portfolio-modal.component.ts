import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../core/modal.service';
import { PortfolioModalItem } from './portfolio-modal-item';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent implements OnInit {
  @Input() videoToken: string;
  
  public videos: PortfolioModalItem[] = [];

  private currentIndex: number = 0;
  private maxIndex: number = this.videos.length - 1;
  public currentVideo: PortfolioModalItem;

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
