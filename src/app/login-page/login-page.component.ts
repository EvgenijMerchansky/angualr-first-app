import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Directive , Input , Output, EventEmitter } from '@angular/core';
import { LoginData } from '../login-data.service';
import { GoogleMapsService } from 'google-maps-angular2';

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

  title: string;
  lat: number = 49.994384;
  lng: number = 36.236568;
  reus = {
    reuser: ''
  };
  locationArray:any = [];
  some = [];

  private map: any;

    constructor(private gapi: GoogleMapsService) {
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
                // marker: true,
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
                componentRestrictions: {country: 'ukr',}
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

  delFunc(e) {

    const elemTargetting = e.target.parentNode.textContent.split(' ')[0];

    for (let i in localStorage){

      if(i === elemTargetting){

        localStorage.removeItem(i);

      }

    }

    const deleteItem = e.target.parentNode.remove();

  }

  testMethodButtons(){


  }

}
