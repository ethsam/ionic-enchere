import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnchRePage } from '../ench-re/ench-re';
import { EnchereService } from '../../services/encheres';
import { Enchere } from '../../models/enchere';
import autobahn from 'autobahn';

@Component({
  selector: 'page-acheter',
  templateUrl: 'acheter.html'
})
export class AcheterPage {

  constructor(public navCtrl: NavController) {
  }


  gotoenchere(params){
    if (!params) params = {};
    this.navCtrl.push(EnchRePage);
  }

  importEnchere() {

    var connection = new autobahn.Connection({url: 'ws://5.189.177.17:8182/ws', realm: 'auction_controller'});

connection.onopen = function (session) {

   // 1) subscribe to a topic
   function onevent(args) {
      console.log("Event:", args[0]);
   }
   session.subscribe('info.auction', onevent).then(
     function(sub) {
       console.log("connection lé doss");
     },
     function (error) {
       console.log("merde : ",error);
     }
   );

   // 2) publish an event
   session.publish('com.myapp.hello', ['Hello, world!']);

   // 3) register a procedure for remoting
   function add2(args) {
      return args[0] + args[1];
   }
   session.register('com.myapp.add2', add2);

   // 4) call a remote procedure
   session.call('com.myapp.add2', [2, 3]).then(
      function (res) {
         console.log("Result:", res);
      }
   );
};

connection.open();

  }

  ionViewDidEnter(){
    this.importEnchere();

    
  }



}
