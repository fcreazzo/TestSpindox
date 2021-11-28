import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-data-icon',
  templateUrl: './user-data-icon.component.html',
  styleUrls: ['./user-data-icon.component.css']
})
export class UserDataIconComponent {

  @Input() userIcon: string = '';
  @Output() dataKind = new EventEmitter<string>();

  constructor() { }

  onMouseOver(value: string) {
    this.dataKind.emit(value);
  }

  onMouseOut() {
    this.dataKind.emit('');
  }

}
