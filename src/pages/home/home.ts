import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RatesPage} from "../rates/rates";
import {ChartsPage} from "../charts/charts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ratesPage = RatesPage;
  chartsPage = ChartsPage;

  constructor(public navCtrl: NavController) {

  }

}
