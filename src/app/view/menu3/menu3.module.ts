import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu3RoutingModule } from './menu3-routing.module';
import { Menu3Module } from 'src/app/main/menu3/menu3.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Menu3RoutingModule,
    Menu3Module
  ]
})
export class Menu3ParentModule { }
