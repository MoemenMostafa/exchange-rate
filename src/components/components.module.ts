import { NgModule } from '@angular/core';
import {IonicModule} from "ionic-angular";
import {MyApp} from "../app/app.component";
import {ExchangeListComponent} from "./exchange-list/exchange-list";


@NgModule({
	declarations: [
    ExchangeListComponent
  ],
	imports: [
	  IonicModule.forRoot(MyApp)
  ],
	exports: [
	  ExchangeListComponent
  ]
})
export class ComponentsModule {}
