import { Component,AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('signIn') signInTest;
  @ViewChild('signOut') signOutTest;
  @ViewChild('register') register;

  title:string = 'Register and login application!';

  btn:any = document.getElementById('btn');

  ngAfterViewInit() {

    const signOut = document.getElementById('signOut');
    console.log(signOut);
    signOut.style.display = 'none';

  }

}
