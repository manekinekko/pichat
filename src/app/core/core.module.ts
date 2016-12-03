import { NgModule } from '@angular/core';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

export const firebaseConfig = {
  apiKey: "AIzaSyDElp_wKrZBWgh-rhsfRlsyHKm-101Lqr0",
  authDomain: "pichat-381aa.firebaseapp.com",
  databaseURL: "https://pichat-381aa.firebaseio.com",
  storageBucket: "pichat-381aa.appspot.com",
  messagingSenderId: "689229560693"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ]
})
export class CoreModule { }
