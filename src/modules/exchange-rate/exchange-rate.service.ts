import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import {ExchangeRateConfig} from "./exchange-rate.config";
import {ApiService} from "../api/api.service";

@Injectable()
export class ExchangeRateService {


    constructor(private config: ExchangeRateConfig, private apiSrv: ApiService){
    }

    getExchangeRate(): Observable<any> {
      const latestEndPoint = this.config.ms.latest.base;
      return this.apiSrv.get(latestEndPoint);
    }

    getExchangeRateHistory(params: ExchangeRateHistoryParams): Observable<any> {
      const historyEndPoint = this.config.ms.history.base;
      return this.apiSrv.get(historyEndPoint, params)
    }

}

export interface ExchangeRateHistoryParams {
    'start_at': string;
    'end_at': string;
    'symbols': string;
}
