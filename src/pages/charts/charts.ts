import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExchangeDataObj, ExchangeRateService} from "../../modules/exchange-rate/exchange-rate.service";
import { Chart } from 'chart.js';


/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  data: any;
  ratesHistory: any = [65, 59, 80, 81, 56, 55, 40];
  amount: number = 1;
  range = "1";
  lineChart: any;
  symbol;

  @ViewChild('lineCanvas') lineCanvas;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private exchangeRateSrv: ExchangeRateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
    this.drawChart();
  }

  ionViewWillEnter() {
    this.exchangeRateSrv.getExchangeRate()
      .subscribe(
        (exchangeRateData) => this.data = new ExchangeDataObj(exchangeRateData)
      )
  }

  changeSymbol(value) {
    let start_at = this.getDate(this.range);
    let end_at = this.getDate();
    this.exchangeRateSrv.getExchangeRateHistory(
      {
        start_at: start_at,
        end_at: end_at,
        symbols: this.symbol
      }
    ).subscribe(
      (exchangeRateHistory) => this.ratesHistory = exchangeRateHistory
    )

  }

  getDate(range = 0){
    let date = new Date();
    let modifiedDate = new Date();
    modifiedDate.setDate(date.getDate() - parseInt(range));
    let month = modifiedDate.getMonth()+1;
    return modifiedDate.getFullYear() + '-' + month + '-' + modifiedDate.getDate()
  }

  private drawChart(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.rates,
            spanGaps: false,
          }
        ]
      }

    });
  }

}
