import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Directive , Input , Output, EventEmitter } from '@angular/core';
import { LoginData } from '../login-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  inputs: ['model'],
  providers: [LoginData]
})
export class LoginPageComponent implements OnInit {

  title: string;
  lat: number = 49.994384;
  lng: number = 36.236568;
  reus = {
    reuser: ''
  };

  admin(){

    const adminBool = localStorage.getItem('adminGeneral');

    return adminBool

  }

  showUser() {

    const testArr = [];
    const store = localStorage;

    for (let i in store){

      testArr.push(i);

    }

    return testArr;
  }

  testArr2 = this.showUser();

  mappedArr = this.testArr2.map((elem, index) => {

    const testingObj = {
      name: elem
    }

    return testingObj
  })




  delFunc(e) {

    const deleteItem = e.target.parentNode.remove();

  }

  ngOnInit() {

  }

}
