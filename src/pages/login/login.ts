import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcheterPage } from '../acheter/acheter';
import { InscriptionPage } from '../inscription/inscription';
import * as $ from 'jquery';
import {NgForm} from '@angular/forms';

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
  goToInscription(){
    // if (!params) params = {};
    this.navCtrl.push(InscriptionPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  send(form:NgForm){
    console.log(form.value.login);
    var data2 = {login: form.value.login, password: form.value.password}
    $.post( "http://5.189.177.17/cgi-bin/loginAuction.py", data2 );
  }


}
