import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Directive , Input , Output, EventEmitter } from '@angular/core';
import { LoginData } from '../login-data.service';
import { GoogleMapsService } from 'google-maps-angular2';
import { Popup } from 'ng2-opd-popup';

// const some:any = [];

console.log(this.some,'my some');

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  inputs: ['model'],
  providers: [LoginData]
})
export class LoginPageComponent implements AfterViewInit {

  @ViewChild('mapElement') mapElement;
  @ViewChild('inputElement') inputElement;
  @ViewChild('itemval') itemval;
  @ViewChild('popup2') popup2:any = Popup;

  title: string;
  lat: number = 49.994384;
  lng: number = 36.236568;
  locationsArray:any = [];
  // some = [];
  keyArr:any = [];
  totalitem:any;
  currentitem:any;
  markerTitle:any;
  markerArray = [];
  globalName:any;
  //
  filtered:string[] = [];
  //
  testArr2 = this.showUser();

  arrayForRender:any = [];

  changeUserData:string;

  mappedArr = this.testArr2.map((elem, index) => {

    const testingObj = {
      name: elem
    }

    return testingObj
  })

  private map: any;

  constructor(private gapi: GoogleMapsService,private popup:Popup) {

  }

  YourConfirmEvent(e){

      let key = this.itemval.nativeElement.value;

      const currentStorage = localStorage.getItem(this.currentitem);

      localStorage.removeItem(this.totalitem);

      localStorage.setItem(key, currentStorage);

      this.popup2.mainStyle.display = 'none';

      window.location.reload();

    }

  ClickButton(e){

      let item = e.target.parentNode.childNodes[0].data;

      let some1 = item.substr(0, item.length - 1);

      this.changeUserData = some1;

      for (let key in localStorage){
         this.keyArr.push(key);
      }

      const localChange = this.keyArr.filter((elem, index) => {

        if(elem === some1){

          return elem === some1;

        }

      })

      const totalChange = localChange[0];

      this.currentitem = some1;

      this.totalitem = totalChange;

      this.popup.options = {
        header: "Change users",
        color: "#00abba", // red, blue....
        widthProsentage: 30, // The with of the popou measured by browser width
        animationDuration: 1, // in seconds, 0 = no animation
        showButtons: true, // You can hide this in case you want to use custom buttons
        confirmBtnContent: "OK", // The text on your confirm button
        cancleBtnContent: "Cancel", // the text on your cancel button
        confirmBtnClass: "btn btn-default", // your class for styling the confirm button
        cancleBtnClass: "btn btn-default", // you class for styling the cancel button
        animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
      };

      this.popup.show(this.popup2.options);

    }

  ngAfterViewInit(): void {




    window.document.addEventListener('keydown', (e) => {
      if(e.key == 'Enter'){
        const input:any = document.querySelector('.input');
        // console.dir(input.value);

        this.arrayForRender.push(input.value);
      }
    });

    const signIn = document.getElementById('signIn');
    signIn.style.display = 'none';

    const signOut = document.getElementById('signOut');
    signOut.style.display = 'block';

    const register = document.getElementById('register');
    register.style.display = 'none';

      //

    this.gapi.init.then((maps: any) => {

      const loc = new maps.LatLng(49.994384, 36.236568);

      this.map = new maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        center: loc,
        scrollwheel: true,
        panControl: true,
        visible: false,
        mapTypeControl: false,
        zoomControl: true,
        streetViewControl: false,
        scaleControl: true,
        zoomControlOptions: {
          style: maps.ZoomControlStyle.LARGE,
          position: maps.ControlPosition.RIGHT_BOTTOM
        }
      });

      const input = this.inputElement.nativeElement;

      const options = {
        componentRestrictions: {country: 'ukr'}
      };

      const autocomplete = new maps.places.Autocomplete(input, options);

      let locationArray:any = [];

      autocomplete.addListener('place_changed', (e) => {

        const place = autocomplete.getPlace();
        const location = place.geometry.location;

        const laten = place.geometry.location.lat();
        const lngF = place.geometry.location.lng();

        const indiv = {
          laten: new maps.LatLng(laten, lngF),
          name: this.inputElement.nativeElement.value,
          id: (() => {
            return Math.random().toString(36).substr(2, 9);
          })()
        }

        some.push(indiv);
        console.log(some,' это мой глобальный массив');

        let bounds = new maps.LatLngBounds();

        for(let i = 0; i < some.length; i++){

          const marker = new maps.Marker({
            position: some[i].laten,
            map: this.map,
            title: this.inputElement.nativeElement.value,
            visible: true,
            draggable: true
          });

          marker.id = (() => {
            return Math.random().toString(36).substr(2, 9);
          })();

          this.markerTitle = marker.title;

          bounds.extend(some[i].laten);

        }

        this.markerArray.push(this.markerTitle);

        this.map.fitBounds(bounds);

      });

    });

  }



  addLocation(arg){

    const listLocations = [];

    // this.some.push(arg);

    return listLocations;

  }

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

  delFunc(e) {

    const elemTargetting = e.target.parentNode.childNodes[0].value;
    localStorage.removeItem(elemTargetting);

    window.location.reload();

  }

  delFuncLoc(e){

    const listvalue = e.target.parentNode.innerText;
    let processedValue = listvalue.substr(0, listvalue.length - 2);

    this.globalName = processedValue;

    console.log(this.locationsArray);

    for(let i = 0;  i < some.length; i++){
      console.log(some[i]);
      if(processedValue == some[i].name){
        // console.log(processedValue, ' <- in my button | run | in array -> ' , this.locationsArray[i].name);

        some.splice([i],1);
        console.log(some);
      }
//   // console.log(this.locationArray[i].name);
//   let locationName = this.locationArray[i].name;
//   if(this.locationArray[i].name == processedValue){
//     // console.log(this.locationArray[i], 'совпадение');
//     delete this.locationArray[i];
//     // console.log(this.locationArray[i], 'my locationArray');
//     // console.log(this.locationArray, 'this.locationArray');
//   }
    }

  }

}
