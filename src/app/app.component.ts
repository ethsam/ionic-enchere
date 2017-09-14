import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AcheterPage } from '../pages/acheter/acheter';
import { AcheterDesBCOINSPage } from '../pages/acheter-des-bcoins/acheter-des-bcoins';
import { InscriptionPage } from '../pages/inscription/inscription';
import { PagePage } from '../pages/page/page';

import { LoginPage } from '../pages/login/login';

import firebase from 'firebase';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyArlA0vet2mYSeuILlg4fOafHTTnClvCms",
      authDomain: "enchere-b0f8b.firebaseapp.com"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToAcheter(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcheterPage);
  }goToInscription(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InscriptionPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PagePage);
  }goToAcheterDesBCOINS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcheterDesBCOINSPage);
  }
}
