import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable()

export class LoginData {

  getAdmin () {

    return 'im a service';

  }

}
