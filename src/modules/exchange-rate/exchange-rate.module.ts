import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ExchangeRateService } from "./exchange-rate.service";
import { ExchangeRateConfig } from "./exchange-rate.config";
import {ApiModule} from "../api/api.module";

@NgModule({
    imports:[
        HttpClientModule,
        ApiModule
    ],
    providers: [ExchangeRateConfig, ExchangeRateService]
})
export class ExchangeRateModule {}
