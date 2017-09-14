import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnchRePage } from '../ench-re/ench-re';
import { EnchereService } from '../../services/encheres';
import { Enchere } from '../../models/enchere';
import autobahn from 'autobahn';
import * as $ from 'jquery';

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

    try {
      connection.onopen = function (session) {

         // 1) subscribe to a topic
         function onevent(args) {
            // console.log("Event:", args[0]);
            // console.log(args[0]["auction001"]);
              var json = args[0],
                  obj = JSON.parse(json);

                  //gestion prix
                  if (obj.id == "auction001") {
                    var caca = "test id = " + obj.id + " " + obj.status;
                    $('#price_1').html(obj.price+' €');
                  }

                  if (obj.id == "auction002") {
                    var caca = "test id = " + obj.id + " " + obj.status;
                    $('#price_2').html(obj.price+' €');
                  }

                  if (obj.id == "auction003") {
                    var caca = "test id = " + obj.id + " " + obj.status;
                    $('#price_3').html(obj.price+' €');
                  }

                  if (obj.id == "auction004") {
                    var caca = "test id = " + obj.id + " " + obj.status;
                    $('#price_4').html(obj.price+' €');
                  }

                  if (obj.id == "auction005") {
                    var caca = "test id = " + obj.id + " " + obj.status;
                    $('#price_5').html(obj.price+' €');
                  }


                  //gestion status

                  
                  if (obj.id == "auction001") {
                    $('#Status_1').html(obj.status);
                  }

                  if (obj.id == "auction002") {
                    $('#Status_2').html(obj.status);
                  }

                  if (obj.id == "auction003") {
                    $('#Status_3').html(obj.status);
                  }

                  if (obj.id == "auction004") {
                    $('#Status_4').html(obj.status);
                  }

                  if (obj.id == "auction005") {
                    var caca = "test id = " + obj.id + " " + obj.status;
                    $('#Status_5').html(obj.status);
                  }

                  // console.log(caca);

            // Event: {"id":"auction001","status":"RUNNING","price":14886}
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
        //  session.publish('com.myapp.hello', ['Hello, world!']);

         // 3) register a procedure for remoting
        //  function add2(args) {
        //     return args[0] + args[1];
        //  }
        //  session.register('com.myapp.add2', add2);

         // 4) call a remote procedure
        //  session.call('com.myapp.add2', [2, 3]).then(
        //     function (res) {
        //        console.log("Result:", res);
        //     }
        //  );
      };

      connection.open();

          } catch (e) {
             alert('erreur');
          }

//avant la

  }

  ionViewDidEnter(){
    this.importEnchere();


  }



}
