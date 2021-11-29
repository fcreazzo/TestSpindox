import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { UserPictureComponent } from './components/user-picture/user-picture.component';
import { UserDataDisplayComponent } from './components/user-data-display/user-data-display.component';
import { UserDataIconComponent } from './components/user-data-icon/user-data-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPictureComponent,
    UserDataDisplayComponent,
    UserDataIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
