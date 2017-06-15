import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-values',
  templateUrl: './login-values.component.html',
  styleUrls: ['./login-values.component.scss'],
  inputs: ['model']
})
export class LoginValuesComponent implements OnInit {
  model = this.model;
  turn = function(){
    console.log(this);
  }


  constructor() { }

  ngOnInit() {
  }

}

console.log(this.model);
