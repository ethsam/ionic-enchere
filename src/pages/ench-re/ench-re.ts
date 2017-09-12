import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import * as $ from 'jquery';
import { autobahn } from 'autobahn';

@Component({
  selector: 'page-ench-re',
  templateUrl: 'ench-re.html'
})
export class EnchRePage {

  constructor(public navCtrl: NavController) {
  }

register(){

 var connection = new autobahn.Connection({url: 'ws://5.189.177.17:8184', realm: 'w3d'});

 connection.onopen = function (session) {

    // 1) subscribe to a topic
    function onevent(args) {
       console.log("Event:", args[0]);
    }
    session.subscribe('w3d.channel', onevent);

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

}
