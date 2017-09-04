import { Component } from '@angular/core';
import { ModalService } from '../../core/modal.service';

@Component({
  selector: 'app-interview-modal',
  templateUrl: './interview-modal.component.html'
})
export class InterviewModalComponent {
  constructor(private modalService: ModalService) { }

  public close() {
    this.modalService.close();
  }
  
  public static get id(): string {
    return '#interview-modal';
  }
}
