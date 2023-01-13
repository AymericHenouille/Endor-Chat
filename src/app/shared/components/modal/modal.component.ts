import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() public modalTitle!: string;
  @Output() public close: EventEmitter<void> = new EventEmitter<void>();

  protected onClose(): void {
    this.close.emit();
  }

}
