import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage implements OnInit{

  constructor(public navCtrl: NavController, public navpost: NavParams) {
  }

  ngOnInit(){
    console.log(this.navpost.data);
  }

}
