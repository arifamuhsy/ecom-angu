import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu2MainComponent } from 'src/app/main/menu2/menu2-main/menu2-main.component';

const routes: Routes = [
  {
    path: '',
    component: Menu2MainComponent,
    data: {
      title: 'Menu 2'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu2RoutingModule { }
