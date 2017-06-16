import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Register } from './register/app.register';
import { RegisterPageComponent } from './register-page/register-page.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ng2-google-place-autocomplete';

const appRoutes: Routes = [
  { path: 'register', component: Register },
  { path: 'register:register_page', component: RegisterPageComponent },

  { path: 'login', component: LoginComponent },
  { path: 'login:logined', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Register,
    RegisterPageComponent,
    LoginComponent,
    LoginPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRW9U-cqcSo1cIJo2vSTAmakNZW-6ZIZ8'
    }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
