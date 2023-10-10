import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu3MainComponent } from 'src/app/main/menu3/menu3-main/menu3-main.component';

const routes: Routes = [
  {
    path: '',
    component: Menu3MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu3RoutingModule { }
