import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import {ExchangeRateConfig} from "./exchange-rate.config";
import {ApiService} from "../api/api.service";

@Injectable()
export class ExchangeRateService {


    constructor(private config: ExchangeRateConfig, private apiSrv: ApiService){
    }

    getExchangeRate(): Observable<any> {
      return this.apiSrv.get(this.config.ms.latest);
    }

    getExchangeRateHistory(params: ExchangeRateHistoryParams): Observable<any> {
      const historyEndPoint = this.config.ms.history;
      const paramsEndPoint = this.config.ms.history.params;
      return this.apiSrv.get(historyEndPoint, params)
    }

}

export interface ExchangeRateHistoryParams {
    'start_at': string;
    'end_at': string;
    'symbols': string;
}
