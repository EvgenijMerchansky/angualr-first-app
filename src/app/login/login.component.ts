import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { LoginValuesComponent } from '../login-values/login-values.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title:string = 'Login page!';

  model:Object = {
    login: '',
    password: '',
  }

  show = function(e,login,password){

    if(this.model.login == 'admin1' && this.model.password == 'admin1111'){
      // console.log('admin true');
      let adminValid:any = true;
      localStorage.setItem('adminGeneral', adminValid);
      console.log(adminValid, 'adminValid');

    }else{
      this.adminValid = false;
      localStorage.setItem('adminGeneral', this.adminValid);
      // console.log(adminValid, 'adminValid');
      // console.log(localStorage['adminGeneral']);
    }

    const names = [];

    for (let i in localStorage){

        const key = i;
        const value = localStorage[i];

        const total = {
          key: key,
          value: value
        }

        names.push(total);

    }

    const keys = names.map((elem, index) => {

      if(this.model.login == elem['key']){
        const boolLog = true;
        return boolLog
      }

    });

    const values = names.map((elem, index) => {

      if(this.model.password == elem['value']){
        const boolPass = true;
        return boolPass
      }

    })

    const logSome = keys.some(x => x == true);
    const passSome = values.some(x => x == true); // true

    if(logSome && passSome == true){

      const totalTrue = true;
      return totalTrue;

    }

  }

  ngOnInit() { // погуглить что это за параша и для чего она нужна.
  };

}
