import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Register and login application!';
  location:string = window.location.pathname;

}

console.dir(typeof location.pathname);

// console.log(window.location.pathname)
