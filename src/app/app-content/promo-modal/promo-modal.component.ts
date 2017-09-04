import { Component } from '@angular/core';
import { ModalService } from '../../core/modal.service';

@Component({
  selector: 'app-promo-modal',
  templateUrl: './promo-modal.component.html'
})
export class PromoModalComponent {
  constructor(private modalService: ModalService) { }

  public close() {
    this.modalService.close();
  }
  
  public static get id(): string {
    return '#promo-modal';
  }
}
