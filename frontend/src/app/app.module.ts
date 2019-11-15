import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuzzerModule } from './buzzer/buzzer.module';
import { StageModule } from './stage/stage.module';
import { SharedModule } from './shared/shared.module';
import { GraphQLModule } from './apollo.config.';
import { HostModule } from './host/host.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GraphQLModule,
    SharedModule,
    StageModule,
    BuzzerModule,
    HostModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
