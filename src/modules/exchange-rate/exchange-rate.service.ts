import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import {ExchangeRateConfig} from "./exchange-rate.config";
import {ApiService} from "../api/api.service";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ExchangeRateService {


    constructor(private config: ExchangeRateConfig, private apiSrv: ApiService){
    }

    getExchangeRate(): Observable<ExchangeDataObj> {
      const latestEndPoint = this.config.ms.latest.base;
      return this.apiSrv.get(latestEndPoint);
    }

    getExchangeRateHistory(params: ExchangeRateHistoryObj): Observable<any> {
      const historyEndPoint = this.config.ms.history.base;
      const exchangeRateHistoryParams = new ExchangeRateHistoryParams(params);
      return this.apiSrv.get(historyEndPoint, exchangeRateHistoryParams)
    }

}

export interface ExchangeRateHistoryObj{
    'start_at': string;
    'end_at': string;
    'symbols': string;
}
export class ExchangeRateHistoryParams extends HttpParams{
    constructor(exchangeRateHistoryObj: ExchangeRateHistoryObj){
      super();
      return this
        .set("start_at", exchangeRateHistoryObj.start_at)
        .set("end_at", exchangeRateHistoryObj.end_at)
        .set("symbols", exchangeRateHistoryObj.symbols);
    }
}

export class ExchangeDataObj {
  base: string;
  date: string;
  rates: {};
  ratesArray?: any;

  constructor(exchangeDataObj: ExchangeDataObj = null) {
    let ratesArray = [];
    if(exchangeDataObj){
      Object.keys(exchangeDataObj.rates).forEach(function(key) {
        ratesArray.push({symbol: key, rate: exchangeDataObj.rates[key]});
      });
      this.ratesArray = ratesArray;
    }
  }
}
