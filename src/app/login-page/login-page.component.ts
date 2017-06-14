import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  title:string = 'Old user page!';

  showUser = function() {

    const testArr = [];
    const store = localStorage;

    for (let i in store){

      testArr.push(i);

    }

    for(let i in store){
      const key = i;
      const value = store[i];

    }
    // console.log( this.key, this.value );

    // console.log(testArr);
    return testArr;
  }

  delFunc = function(e) {

    const deleteItem = e.target.parentNode.remove();
    // localStorage.removeItem(deleteItem);

    // console.log(localStorage);
  }

  ngOnInit() {

  }



}

console.log(this);

// console.log(localStorage, this);
