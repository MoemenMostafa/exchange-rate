import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./api.service";
import { ApiConfig } from "./api.config";

@NgModule({
    imports:[
        HttpClientModule,
    ],
    providers: [ApiConfig, ApiService]
})
export class ApiModule {}
