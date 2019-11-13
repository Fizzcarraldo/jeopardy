import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BuzzerModule } from './buzzer/buzzer.module';
import { StageModule } from './stage/stage.module';
import { SharedModule } from './shared/shared.module';
import { GraphQLModule } from './apollo.config.';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GraphQLModule,
    SharedModule,
    StageModule,
    BuzzerModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
