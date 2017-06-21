import { Component,AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title:string = 'Register and login application!';

  btn:any = document.getElementById('btn');

  locRel(){

    window.location.reload();

  }

  ngAfterViewInit() {

    const signOut = document.getElementById('signOut');

    signOut.style.display = 'none';

  }

}
