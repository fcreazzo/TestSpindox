import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  userDataToDisplay: {title: string, data: string} = {title: '', data: ''};

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUser()
      .subscribe(user => {
        this.user = user?.results[0];
      });
  }

  onIconHover(event: string) {

    switch (event) {
      case ('name'):
        const name = this.user?.name;
        this.userDataToDisplay = {title: 'Hi, My name is', data: `${name.first} ${name.last}`};
        break;
      case ('email'):
        this.userDataToDisplay = {title: 'My email adrres is', data: this.user?.email};
        break;
      case ('calendar'):
        const date = new Date(this.user?.dob?.date);
        this.userDataToDisplay = {title: 'My birthday is', data: date.toLocaleDateString('en-GB')};
        break;
      case ('address'):
        const street = this.user?.location?.street;
        this.userDataToDisplay = {title: 'My email address is', data: `${street.number} ${street.name}`};
        break;
      case ('phone'):
        this.userDataToDisplay = {title: 'My phone numer is', data: this.user?.phone};
        break;
      case ('password'):
        this.userDataToDisplay = {title: 'My password is', data: this.user?.login?.password};
        break;
    }
  }

  onIconOut() {
    this.userDataToDisplay = {title: '', data: ''};
  }

}
