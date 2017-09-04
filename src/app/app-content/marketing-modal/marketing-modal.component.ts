import { Component } from '@angular/core';
import { ModalService } from '../../core/modal.service';

@Component({
  selector: 'app-marketing-modal',
  templateUrl: './marketing-modal.component.html'
})
export class MarketingModalComponent {
  constructor(private modalService: ModalService) { }

  public close() {
    this.modalService.close();
  }

  public static get id(): string {
    return '#marketing-modal';
  }
}
