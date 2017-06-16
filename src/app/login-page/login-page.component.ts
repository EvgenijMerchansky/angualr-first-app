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
  lat: number = 51.678418;
  lng: number = 7.809007;
  reus = {
    reuser: ''
  };

  admin(){

    const adminBool = localStorage.getItem('adminGeneral');

    return adminBool

  }


  // constructor(private _loginData: LoginData){
  //
  // }
  //
  ngOnInit() {
  //
  //   this.hello = this._loginData.getAdmin();
  //
  }

  // @Output() markerClick: EventEmitter<void> = new EventEmitter<void>();


  addMarker(){
    console.log('marker Added!');

    // const newMarker = {
    //   name: this.markerName,
    //   lat: parseFloat(this.markerLat),
    //   lng: parseFloat(this.markerLng)
    // }

    // this.markers.push(newMarker);

  }



  showUser() {

    const testArr = [];
    const store = localStorage;

    for (let i in store){

      testArr.push(i);

    }

    return testArr;
  }


  delFunc(e) {

    const deleteItem = e.target.parentNode.remove();

  }

}
