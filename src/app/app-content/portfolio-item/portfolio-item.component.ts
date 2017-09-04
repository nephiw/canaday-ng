import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../core/modal.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent {
  @Input()
  public image: string;

  @Input()
  public modal: string;

  constructor(private modalService: ModalService) { }

  public openModal() {
    this.modalService.open(this.modal);
  }
}
