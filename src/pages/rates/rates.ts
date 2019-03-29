import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExchangeDataObj, ExchangeRateService} from "../../modules/exchange-rate/exchange-rate.service";

@IonicPage()
@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage {

  data: any;
  amount: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private exchangeRateSrv: ExchangeRateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatesPage');
  }

  ionViewWillEnter() {
    this.exchangeRateSrv.getExchangeRate()
      .subscribe(
        (exchangeRateData) => {
          this.data = new ExchangeDataObj(exchangeRateData);
          console.log(this.data);
        }
      )
  }

}
