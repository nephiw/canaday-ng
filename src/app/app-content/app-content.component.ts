import { Component, OnInit } from '@angular/core';
import { ModalService } from '../core/modal.service';

import { PromoModalComponent } from './promo-modal/promo-modal.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { InterviewModalComponent } from './interview-modal/interview-modal.component';
import { MarketingModalComponent } from './marketing-modal/marketing-modal.component';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.register(PromoModalComponent);
    this.modalService.register(ImageModalComponent);
    this.modalService.register(InterviewModalComponent);
    this.modalService.register(MarketingModalComponent);
  }
}
