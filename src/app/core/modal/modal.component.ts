import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('main', [
      state('in', style({ opacity: 1 })),
      transition('* <=> in', animate('400ms ease-in-out'))
    ]),
    trigger('fade', [
      state('in', style({ opacity: 0.6 })),
      transition('* <=> in', animate('250ms ease-in-out'))
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input()
  public title: string;

  public animationState: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.animationState = 'in';
  }

  public close(): void {
    this.modalService.close();
  }
}
