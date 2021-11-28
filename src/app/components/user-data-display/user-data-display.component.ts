import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent implements OnInit {

  @Input() userData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
