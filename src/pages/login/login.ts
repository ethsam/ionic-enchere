import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcheterPage } from '../acheter/acheter';
import { InscriptionPage } from '../inscription/inscription';

import { PagePage } from '../page/page';

// import * as $ from 'jquery';
import {NgForm} from '@angular/forms';
import firebase from 'firebase';

// var data_login : any; //attention plantage du server /!\

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

  // send(form:NgForm){
  //   console.log(form.value.login);
  //   var data2 = {login: form.value.login, password: form.value.password}
  //   $.post( "http://5.189.177.17/cgi-bin/loginAuction.py", data2 );
  // }

  send(form:NgForm){

    // var data2 = {login: form.value.login, password: form.value.password}
    // // $.post( "http://localhost:8888/serverapp/login.php", data2 );
    //
    // $.ajax({
    //          url : 'http://localhost:8888/serverapp/login.php', // La ressource ciblée
    //          type : 'POST', // Le type de la requête HTTP.
    //          data : data2,
    //          success: function( data ) {
    //             // $(#data_login).replaceWith($('#test').html(data))
    //             // alert(data);
    //             // data_login = data;
    //             data_login = "test";
    //             }
    //           });
    //           console.log(data_login);
    firebase.auth().signInWithEmailAndPassword(form.value.login,form.value.password)
    .then(data => {
      this.navCtrl.setRoot(PagePage, data);

    })

    .catch(error => {
      alert('Error !!!');
    });

  }


}
