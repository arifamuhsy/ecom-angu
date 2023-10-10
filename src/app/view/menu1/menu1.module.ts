import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu1RoutingModule } from './menu1-routing.module';
import { Menu1Module } from 'src/app/main/menu1/menu1.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Menu1RoutingModule,
    Menu1Module
  ]
})
export class Menu1ParentModule { }
