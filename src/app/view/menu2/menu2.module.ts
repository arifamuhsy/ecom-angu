import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu2RoutingModule } from './menu2-routing.module';
import { Menu2Module } from 'src/app/main/menu2/menu2.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Menu2RoutingModule,
    Menu2Module
  ]
})
export class Menu2ParentModule { }
