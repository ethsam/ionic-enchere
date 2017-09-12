import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AcheterPage } from '../acheter/acheter';
// import * as $ from 'jquery';
import {NgForm} from '@angular/forms';
import firebase from 'firebase';

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

  register(form:NgForm){
  //   var $data = { email: form.value.email, nom: form.value.nom, password: form.value.password }
  //   $.post('http://localhost:8888/serverapp/register.php', $data);
  // this.navCtrl.push(LoginPage);
  firebase.auth().createUserWithEmailAndPassword(form.value.email,form.value.password)
  .then(data => {
    this.navCtrl.push(LoginPage);

  })
  .catch(error => alert('Error!'));

  }

}
