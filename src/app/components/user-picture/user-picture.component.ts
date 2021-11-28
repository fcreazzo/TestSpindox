import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.css']
})
export class UserPictureComponent implements OnInit {
  
  @Input() urlImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
