import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatesPage } from './rates';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    RatesPage,
  ],
  imports: [
    IonicPageModule.forChild(RatesPage),
    ComponentsModule
  ],
})
export class RatesPageModule {}
