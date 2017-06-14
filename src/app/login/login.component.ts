import { Component, OnInit } from '@angular/core';

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
    console.log(this.model.login.length);

    const data:any = {
      login: login.value,
      password: password.value
    };

    if(data.login == 'admin1' && data.password == 'admin111'){

      const store = localStorage;

      store.setItem('administrator', JSON.stringify(data));

      console.log(store);

    }else{
      // нужно сделать так что бы запретить пускать на следующие элемент по роуту
      // console.log('i don know you!');
    }

  }

  ngOnInit() { // погуглить что это за параша и для чего она нужна.
  };

}

// console.log(this);
