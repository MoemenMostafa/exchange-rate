import { NgModule } from '@angular/core';
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";
import {RatesPageModule} from "../rates/rates.module";
import {ChartsPageModule} from "../charts/charts.module";
import {ExchangeRateModule} from "../../modules/exchange-rate/exchange-rate.module";

@NgModule({
    declarations:[
      HomePage
    ],
    imports: [
      IonicPageModule.forChild(HomePage),
      RatesPageModule,
      ChartsPageModule,
      ExchangeRateModule
    ]
})
export class HomePageModule {}
