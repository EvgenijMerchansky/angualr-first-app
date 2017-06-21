import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Directive , Input , Output, EventEmitter } from '@angular/core';
import { LoginData } from '../login-data.service';
import { GoogleMapsService } from 'google-maps-angular2';
import { PopupModule } from 'ng2-opd-popup';  //
import { Popup } from 'ng2-opd-popup';

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

  @ViewChild('popup2') popup2: Popup;

  title: string;
  lat: number = 49.994384;
  lng: number = 36.236568;
  reus = {
    reuser: ''
  };
  locationArray:any = [];
  some = [];

  private map: any;

    constructor(private gapi: GoogleMapsService,private popup:Popup) {
    }

    ClickButton(e){
      const changer:any = document.querySelector('.logined-page');

      // console.dir(changer.childNodes[0].nextElementSibling.children[1].lastChild.nextSibling);
      // changer.style.background = "black";
      // changer.stopPropagation();
      // changer.style.opacity = ".1";
      setTimeout(() => {

      },1000)

      // changer.style.opacity = ".5";
      // changer.className = 'changer';
      // changer.className = 'changer';
      // changer
        // opacity: .5;
      // changer.style.marginLeft = '1';
      // console.dir(e.currentTarget.parentNode.childNodes[0].data);
      // console.log(e.target.parentNode.childNodes[0].data);
      let zacep = e.target.parentNode.childNodes[0].data
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

      const signIn = document.getElementById('signIn');
      signIn.style.display = 'none';

      const signOut = document.getElementById('signOut');
      signOut.style.display = 'block';

      const register = document.getElementById('register');
      register.style.display = 'none';

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

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                const location = place.geometry.location;

                const laten = place.geometry.location.lat();
                const lngF = place.geometry.location.lng();
                const num1 = laten;
                const num2 = lngF;

                  const indiv = {
                    laten: new maps.LatLng(num1, num2)
                  }

                this.locationArray.push(indiv);

                // let bounds = ;

                for(let i = 0; i < this.locationArray.length; i++){

                  const marker = new maps.Marker({
                    position: this.locationArray[i].laten,
                    map: this.map,
                    title: this.inputElement.nativeElement.value,
                    visible: true,
                    draggable: true
                  });

                  const pushed = marker.title;

                  // bounds.extend ();
                  // this.map.fitBounds(new maps.LatLngBounds(this.locationArray[i].laten));

                }

                this.map.setZoom(13);
                this.map.setCenter({
                    lat: location.lat(),
                    lng: location.lng()
                });

            });

        });

    }

  addLocation(arg){

    const listLocations = [];

    this.some.push(arg);

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

  testArr2 = this.showUser();

  mappedArr = this.testArr2.map((elem, index) => {

    const testingObj = {
      name: elem
    }

    return testingObj
  })

  YourConfirmEvent(){

    window.location.reload();

  }

  delFunc(e) {
    console.dir(e.target.parentNode.childNodes[0].value)

    const elemTargetting = e.target.parentNode.childNodes[0].value;

    for (let i in localStorage){

      if(i === elemTargetting){

        localStorage.removeItem(i);

      }

    }

    const deleteItem = e.target.parentNode.remove();

  }

}
