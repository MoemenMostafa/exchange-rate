import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { ResponseContentType } from "@angular/http";
import {ApiConfig} from "./api.config";
import {type} from "os";

@Injectable()
export class ApiService {

    private url:string;

    constructor(private http: HttpClient, private apiConfig: ApiConfig){
        this.url = this.apiConfig.serverURL + this.apiConfig.apiEndPoint;
    }


    public get(endpoint: string, params?:HttpParams):Observable<any>{
        let options = {
            params:params
        };
        return this.http.get(this.url + endpoint, options);
    }

    public post(endpoint: string, body: object = {}, option:PostRequestOptions = {}):Observable<any> {
      let requestOption:any = {
        };
        if(option && option.headers){
            let requestHeader = new HttpHeaders();
            let headerKeys = Object.keys(option.headers);
            for(let i=0; i<headerKeys.length; i++){
                requestHeader = requestHeader.set(headerKeys[i], option.headers[headerKeys[i]]);
            }
            requestOption.headers = requestHeader;
        }
        if(option && option.responseType){
            requestOption.responseType = option.responseType;
        }

        return this.http.post(this.url + endpoint, body, requestOption);
    }

    public delete(endpoint: string):Observable<any> {
        return this.http.delete(this.url + endpoint);
    }
}

export interface PostRequestOptions{
    headers?:any;
    responseType?:any;
}
