import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: 'buzzer/signin/:gameId', component: SigninComponent },
  { path: 'buzzer', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class BuzzerRoutingModule { }
