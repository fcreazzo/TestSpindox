import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { faUser, faEnvelope, faCalendar, faMap  } from '@fortawesome/free-regular-svg-icons';
import { faUser, faEnvelope, faCalendar, faMap, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-user-data-icon',
  templateUrl: './user-data-icon.component.html',
  styleUrls: ['./user-data-icon.component.css']
})
export class UserDataIconComponent {

  @Input() userIcon: string = '';
  @Output() dataKind = new EventEmitter<string>();

  userName = faUser;
  userEmail = faEnvelope;
  userCalendar = faCalendar;
  userAddress = faMap;
  userPhone = faPhone;
  userPassword = faLock;

  constructor() { }

  onMouseOver(value: string) {
    this.dataKind.emit(value);
  }

  onMouseOut() {
    this.dataKind.emit('');
  }

}
