import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcheterPage } from '../acheter/acheter';
import { InscriptionPage } from '../inscription/inscription';
import * as $ from 'jquery';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToAcheter(params){
    if (!params) params = {};
    this.navCtrl.push(AcheterPage);
  }
  goToInscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  alert(params){
    alert(params);
  }


}
