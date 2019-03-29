import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {ExchangeDataObj} from "../../modules/exchange-rate/exchange-rate.service";

@Component({
  selector: 'exchange-list',
  templateUrl: 'exchange-list.html'
})
export class ExchangeListComponent {

  @Input('data') data:ExchangeDataObj;
  @Input('amount') amount: number;

  constructor(public navCtrl:NavController) {
    console.log('Hello ExchangeListComponent Component');
  }

}
