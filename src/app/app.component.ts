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

  public meth(argIn:any,argOut:any,register:any){

    if(location.pathname === '/login'){
      argIn.nativeElement.innerHTML = 'Sign in';
      argOut.nativeElement.style.display = 'none';
      register.nativeElement.innerHTML = 'Register';

    }else if(location.pathname === '/'){
      argIn.nativeElement.innerHTML = 'Sign in';
      argOut.nativeElement.style.display = 'none';
      register.nativeElement.innerHTML = 'Register';

    }else if(location.pathname === '/register'){
      argIn.nativeElement.innerHTML = 'Sign in';

    }else if(location.pathname != '/' || location.pathname != '/login'){
      argIn.nativeElement.innerHTML = 'Sign out';
      register.nativeElement.style.display = 'none';
      argOut.nativeElement.style.display = 'none';
      register.nativeElement.style.display = 'none';

    }else if(location.pathname === '/'){
      argOut.nativeElement.style.display = 'none';

    }
  }

  ngAfterViewInit() {
    this.meth(this.signInTest,this.signOutTest,this.register);

  }

}
