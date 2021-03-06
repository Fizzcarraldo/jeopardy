import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { BuzzerMainComponent } from './buzzer-main/buzzer-main.component';
import { BuzzerMainResolveService } from './buzzer-main/buzzer-main-resolve.service';


const routes: Routes = [
  { path: 'buzzer/signin/:gameId', component: SigninComponent },
  { path: 'buzzer/main/:gameId/:playerId', 
    component: BuzzerMainComponent,
    resolve: {
      game: BuzzerMainResolveService
    },
    runGuardsAndResolvers: "always"
  },
  { path: 'buzzer/error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class BuzzerRoutingModule { }
