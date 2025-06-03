import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  standalone: true
})
export class ModalComponent {
  @Input() name = ""
}
