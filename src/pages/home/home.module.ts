import { NgModule } from '@angular/core';
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";
import {RatesPageModule} from "../rates/rates.module";
import {ChartsPageModule} from "../charts/charts.module";

@NgModule({
    declarations:[
      HomePage
    ],
    imports: [
      IonicPageModule.forChild(HomePage),
      RatesPageModule,
      ChartsPageModule
    ]
})
export class HomePageModule {}
