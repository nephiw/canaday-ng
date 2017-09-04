import { ModalService } from '../../core/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html'
})
export class ImageModalComponent {
  constructor(private modalService: ModalService) { }

  public close() {
    this.modalService.close();
  }

  public static get id(): string {
    return '#image-modal';
  }
}
