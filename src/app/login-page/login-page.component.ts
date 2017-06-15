import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Directive , Input , Output, EventEmitter} from '@angular/core';

// import { MarkerManager } from '../services/managers/marker-manager';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  inputs: ['model']
})
export class LoginPageComponent implements OnInit {
  // title:string = 'Old user page!';
  @Output() markerClick: EventEmitter<void> = new EventEmitter<void>();
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  // markerName:string;
  // markerLat:string;
  // markerLng:string;

  // markers = [];
  // markerDraggable:string;

  addMarker(){
    console.log('marker Added!');

    // const newMarker = {
    //   name: this.markerName,
    //   lat: parseFloat(this.markerLat),
    //   lng: parseFloat(this.markerLng)
    // }

    // this.markers.push(newMarker);

  }

  // @Output() centerChange: EventEmitter<LatLngLiteral> = new EventEmitter<LatLngLiteral>();
  // @Input() disableDoubleClickZoom: boolean = true;

  // updateMarkerPosition(marker: AgmMarker): Promise<void> {
  //   return this._markers.get(marker).then(
  //       (m: Marker) => m.setPosition({lat: marker.latitude, lng: marker.longitude}));
  // }

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

  // AIzaSyCRW9U-cqcSo1cIJo2vSTAmakNZW-6ZIZ8

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
