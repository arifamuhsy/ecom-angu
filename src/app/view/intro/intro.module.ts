import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroMainModule } from '../../main/intro/intro.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IntroRoutingModule,
    IntroMainModule
  ]
})
export class IntroModule { }
