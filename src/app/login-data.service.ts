import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable()

export class LoginData {
  // model = this.model;

  getAdmin () {
    return 'im a service';
  }

}
console.log(this.model);
