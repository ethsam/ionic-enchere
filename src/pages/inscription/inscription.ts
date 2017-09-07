import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AcheterPage } from '../acheter/acheter';

@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToAcheter(params){
    if (!params) params = {};
    this.navCtrl.push(AcheterPage);
  }goToInscription(params){
    if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }
}
