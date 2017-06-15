import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  inputs: ['model']
})
export class LoginPageComponent implements OnInit {
  title:string = 'Old user page!';

  reus = {
    reuser: ''
  }
  // mode:Object = {
  //
  // };
  nums:number = 12;

  constructor(){
    this.nums = 44;
    // console.log(this.nums);

  }

  showUser = function() {


    // console.log(this.model)

    const testArr = [];
    const store = localStorage;

    for (let i in store){

      testArr.push(i);

    }

    // for(let i in store){
    //
    //   const key = i;
    //   const value = store[i];
    //   console.log(key , value)
    //
    // }
    // console.log( this.key, this.value );

    // console.log(testArr);
    return testArr;
  }

  delFunc = function(e) {
    // ;

    const deleteItem = e.target.parentNode.remove();
    // console.log(this.model);
    // localStorage.removeItem(deleteItem);

    // console.log(localStorage);
    // console.log(this)
  }

  ngOnInit() {

  }



}

// console.log(this);

// console.log(this);

// console.log(localStorage, this);
