import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1MainComponent } from 'src/app/main/menu1/menu1-main/menu1-main.component';

const routes: Routes = [
  {
    path: '',
    component: Menu1MainComponent,
    data: {
      title: 'Menu 1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu1RoutingModule { }
