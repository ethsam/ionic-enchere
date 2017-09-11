import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnchRePage } from '../ench-re/ench-re';

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

}
