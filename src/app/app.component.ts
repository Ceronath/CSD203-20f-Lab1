import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      var firebaseConfig = {
        apiKey: "AIzaSyCXfh_0tWFuyDBfn-PQ9U047rvdZYsaH6k",
        authDomain: "csd203-20f-jp.firebaseapp.com",
        databaseURL: "https://csd203-20f-jp.firebaseio.com",
        projectId: "csd203-20f-jp",
        storageBucket: "csd203-20f-jp.appspot.com",
        messagingSenderId: "117766700685",
      }

      firebase.initializeApp(firebaseConfig);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
