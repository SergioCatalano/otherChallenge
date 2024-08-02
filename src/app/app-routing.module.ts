import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Reto12Component } from './reto12/reto12.component';

const routes: Routes = [

  {path: '', component: Reto12Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
