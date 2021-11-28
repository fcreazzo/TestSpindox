import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  userDataToDisplay: string = '';

  constructor(private userService: UserService) {}

ngOnInit() {

  this.userService.getUser()
  .subscribe(user => {
    console.log('USER: ', user);
    this.user = user?.results[0];
  });
}

onIconHover(event: string) {
  this.userDataToDisplay = event;
}

}
