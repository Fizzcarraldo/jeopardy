import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';;
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LobbyComponent } from './lobby/lobby.component';

import {WebSocketLink} from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { DefaultOptions } from 'apollo-client';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    LobbyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {

    // Create an http link:
    const http = httpLink.create({
      uri: 'http://localhost:3000/graphql'
    });

    // Create a WebSocket link:
    const ws = new WebSocketLink({
      uri: `ws://localhost:3000/graphql`,
      options: {
        reconnect: true
      }
    });

    const link =  split(
      // split based on operation type
      ({ query }) => {
        const { kind  } = getMainDefinition(query);
        return kind === 'OperationDefinition';
      },
      ws,
      http,
    );

    const defaultOptions = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }

    apollo.create({
      link,
      cache: new InMemoryCache(),
      defaultOptions: defaultOptions as DefaultOptions,
    });
  }
 }
